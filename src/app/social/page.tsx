import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { tServer } from "@/lib/i18nServer";
import SocialClient from "@/features/social/SocialClient";

export async function generateMetadata(): Promise<Metadata> {
  const title = await tServer("social.title");
  const description = await tServer("social.subtitle");
  return buildMetadata({
    title,
    description,
    alternates: { canonical: "/social" },
  });
}

export default function SocialPage() {
  return <SocialClient />;
}
