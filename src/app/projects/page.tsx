import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { tServer } from "@/lib/i18nServer";
import ProjectPageClient from "@/features/projects/ProjectClient";

type TypeFilter = "all" | "software" | "design";
const ALLOWED: TypeFilter[] = ["all", "software", "design"];

function toType(val: unknown): TypeFilter {
  const s = Array.isArray(val) ? val[0] : val;
  return typeof s === "string" && (ALLOWED as string[]).includes(s)
    ? (s as TypeFilter)
    : "all";
}

export async function generateMetadata(): Promise<Metadata> {
  const title = await tServer("projectsPage.title");
  const description = await tServer("projectsPage.subtitle");
  return buildMetadata({
    title,
    description,
    alternates: { canonical: "/projects" },
  });
}

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const sp = await searchParams;
  const initialType = toType(sp?.cat);

  return <ProjectPageClient initialType={initialType} />;
}
