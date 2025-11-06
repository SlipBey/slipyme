import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { tServer } from "@/lib/i18nServer";
import MediaClient from "@/features/media/MediaClient";

export async function generateMetadata(): Promise<Metadata> {
  const title = await tServer("media.title");
  const description = await tServer("media.text");
  return buildMetadata({
    title,
    description,
    alternates: { canonical: "/media" },
  });
}

export default function MediaPage() {
  return <MediaClient />;
}
