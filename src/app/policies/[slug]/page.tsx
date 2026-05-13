import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import PoliciesClient from "@/features/policies/PoliciesClient";
import { POLICIES } from "@/features/policies/lib/policies";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const policy = POLICIES.find((p) => p.slug === slug);
  return buildMetadata({
    title: policy?.title ?? "Policies",
    alternates: { canonical: `/policies/${slug}` },
  });
}

export default async function PolicyPage({ params }: Props) {
  const { slug } = await params;
  if (!POLICIES.some((p) => p.slug === slug)) notFound();
  return <PoliciesClient slug={slug} />;
}
