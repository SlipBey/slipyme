import type { Metadata } from "next";
import { tServer } from "@/lib/i18nServer";
import { buildMetadata } from "@/lib/seo";
import ContactClient from "@/features/contact/ContactClient";

export async function generateMetadata(): Promise<Metadata> {
  const title = await tServer("general.contact");
  return buildMetadata({
    title,
    alternates: { canonical: "/contact" },
  });
}

export default function ContactPage() {
  return <ContactClient />;
}
