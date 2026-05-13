import MusicClient from "@/features/music/MusicClient";
import { tServer } from "@/lib/i18n/server";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const title = await tServer("music.seo.title");
  const description = await tServer("music.seo.description");

  return buildMetadata({
    title,
    description,
    alternates: { canonical: "/music" },
  });
}

export default function MusicPage() {
  return <MusicClient />;
}
