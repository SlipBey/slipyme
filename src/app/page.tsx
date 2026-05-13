import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import HomeClient from "@/features/home/HomeClient";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({ alternates: { canonical: "/" } });
}

export default function Page() {
  return <HomeClient />;
}
