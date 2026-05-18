import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const API_BASE_URL = (process.env.SLIPYME_API_BASE_URL ?? "")
  .trim()
  .replace(/\/$/, "");
const API_TOKEN = (process.env.SLIPYME_API_TOKEN ?? "").trim();

const ALLOWED_METHODS = new Set(["GET", "POST", "PUT", "PATCH", "DELETE"]);

const HOP_BY_HOP = new Set([
  "connection",
  "keep-alive",
  "proxy-authenticate",
  "proxy-authorization",
  "te",
  "trailer",
  "transfer-encoding",
  "upgrade",
  "host",
  "cookie",
  "accept-encoding",
]);

type RouteCtx = {
  params: Promise<{ path?: string[] }>;
};

function cleanSegment(segment: string) {
  return segment.replace(/^\/+|\/+$/g, "");
}

function assertApiBaseUrl() {
  if (!API_BASE_URL) {
    throw new Error("Missing SLIPYME_API_BASE_URL");
  }

  try {
    const url = new URL(API_BASE_URL);
    if (!["http:", "https:"].includes(url.protocol)) {
      throw new Error("Invalid protocol");
    }
  } catch {
    throw new Error(`Invalid SLIPYME_API_BASE_URL: ${API_BASE_URL}`);
  }
}

function buildTargetUrl(pathParts: string[] | undefined, req: NextRequest) {
  assertApiBaseUrl();

  const safePath = (pathParts ?? [])
    .map(cleanSegment)
    .filter(Boolean)
    .map(encodeURIComponent)
    .join("/");

  const target = new URL(safePath, `${API_BASE_URL}/`);

  req.nextUrl.searchParams.forEach((value, key) => {
    if (!key.toLowerCase().startsWith("__next")) {
      target.searchParams.append(key, value);
    }
  });

  return target;
}

function buildHeaders(req: NextRequest) {
  const headers = new Headers();

  req.headers.forEach((value, key) => {
    const lower = key.toLowerCase();

    if (!HOP_BY_HOP.has(lower) && lower !== "authorization") {
      headers.set(key, value);
    }
  });

  headers.set("accept", "application/json");
  headers.set("accept-encoding", "identity");

  if (API_TOKEN) {
    headers.set("authorization", `Bearer ${API_TOKEN}`);
  }

  return headers;
}

async function proxy(req: NextRequest, ctx: RouteCtx) {
  if (!ALLOWED_METHODS.has(req.method)) {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }

  let target: URL;

  try {
    const { path } = await ctx.params;
    target = buildTargetUrl(path, req);
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Invalid proxy config",
      },
      { status: 500 },
    );
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15_000);

  try {
    const hasBody = !["GET", "HEAD"].includes(req.method);

    const upstream = await fetch(target, {
      method: req.method,
      headers: buildHeaders(req),
      body: hasBody ? await req.arrayBuffer() : undefined,
      cache: "no-store",
      signal: controller.signal,
    });

    const contentType =
      upstream.headers.get("content-type") ?? "application/json";

    const body = await upstream.arrayBuffer();

    return new NextResponse(body, {
      status: upstream.status,
      statusText: upstream.statusText,
      headers: {
        "content-type": contentType,
        "cache-control": "no-store, max-age=0",
        "x-content-type-options": "nosniff",
      },
    });
  } catch (error) {
    const message =
      error instanceof Error && error.name === "AbortError"
        ? "Upstream request timeout"
        : "Proxy request failed";

    return NextResponse.json({ error: message }, { status: 502 });
  } finally {
    clearTimeout(timer);
  }
}

export const GET = proxy;
export const POST = proxy;
export const PUT = proxy;
export const PATCH = proxy;
export const DELETE = proxy;
