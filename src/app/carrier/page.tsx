import type { Metadata } from "next";
import { tServer } from "@/lib/i18n/server";
import { buildMetadata } from "@/lib/seo";
import CarierClient from "@/features/carrier/CarierClient";

export async function generateMetadata(): Promise<Metadata> {
  const title = await tServer("carrierPage.title");
  const description = await tServer("carrierPage.subtitle");
  return buildMetadata({
    title,
    description,
    alternates: { canonical: "/carrier" },
  });
}

export default function CarierPage() {
  return <CarierClient />;
}
