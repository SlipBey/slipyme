import type { Metadata } from "next";
import { tServer } from "@/lib/i18n/server";
import { buildMetadata } from "@/lib/seo";
import CsrClient from "@/features/csr/CsrClient";

export async function generateMetadata(): Promise<Metadata> {
  const title = await tServer("general.csr");
  const description = await tServer("csr.text");
  return buildMetadata({
    title,
    description,
    alternates: { canonical: "/social-responsibility" },
  });
}

export default function SocialResponsibilityPage() {
  return <CsrClient />;
}
