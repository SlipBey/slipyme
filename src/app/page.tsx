import type { Metadata } from "next";
import { tServer } from "@/lib/i18nServer";
import { buildMetadata } from "@/lib/seo";
import HomeClient from "@/features/home/HomeClient";

export async function generateMetadata(): Promise<Metadata> {
  const title = await tServer("general.home");
  return buildMetadata({
    title,
    alternates: { canonical: "/" },
  });
}

export default function Page() {
  return <HomeClient />;
}
