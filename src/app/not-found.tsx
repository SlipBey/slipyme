import type { Metadata } from "next";
import { tServer } from "@/lib/i18n/server";
import { buildMetadata } from "@/lib/seo";
import NotFoundClient from "@/features/notfound/NotFoundClient";

export async function generateMetadata(): Promise<Metadata> {
  const title = await tServer("general.notfound");
  return buildMetadata({
    title,
    alternates: { canonical: "/" },
  });
}

export default function NotFound() {
  return <NotFoundClient />;
}
