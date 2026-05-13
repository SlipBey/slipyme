import type { Metadata } from "next";
import { tServer } from "@/lib/i18n/server";
import { buildMetadata } from "@/lib/seo";
import ContactClient from "@/features/contact/ContactClient";

export async function generateMetadata(): Promise<Metadata> {
  const title = await tServer("general.contact");
  const description = await tServer("contact.description");
  return buildMetadata({
    title,
    description,
    alternates: { canonical: "/contact" },
  });
}

export default function ContactPage() {
  return <ContactClient />;
}
