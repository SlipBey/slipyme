import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { tServer } from "@/lib/i18nServer";
import CareerClient from "@/features/career/CareerClient";

export async function generateMetadata(): Promise<Metadata> {
  const title = await tServer("careerPage.title");
  const description = await tServer("careerPage.subtitle");
  return buildMetadata({
    title,
    description,
    alternates: { canonical: "/career" },
  });
}

export default function CareerPage() {
  return <CareerClient />;
}
