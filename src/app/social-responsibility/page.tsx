import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { tServer } from "@/lib/i18nServer";
import CsrClient from "@/features/csr/CsrClient";

export async function generateMetadata(): Promise<Metadata> {
  const title = await tServer("general.csr");
  const description = await tServer("csr.hero.subtitle");
  return buildMetadata({
    title,
    description,
    alternates: { canonical: "/social-responsibility" },
  });
}

export default function CsrPage() {
  return <CsrClient />;
}
