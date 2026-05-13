import type { Metadata } from "next";
import { tServer } from "@/lib/i18n/server";
import { buildMetadata } from "@/lib/seo";
import AboutClient from "@/features/about/AboutClient";

export async function generateMetadata(): Promise<Metadata> {
  const title = await tServer("general.about");
  const description = await tServer("about");
  return buildMetadata({
    title,
    description: description.slice(0, 200),
    alternates: { canonical: "/about" },
  });
}

export default function AboutPage() {
  return <AboutClient />;
}
