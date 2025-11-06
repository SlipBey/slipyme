import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { tServer } from "@/lib/i18nServer";
import AboutContactCta from "@/features/about/components/AboutContactCta";
import AboutExpertise from "@/features/about/components/AboutExpertise";
import AboutHero from "@/features/about/components/AboutHero";
import AboutTeamMembers from "@/features/about/components/AboutTeamMembers";
import AboutTimeline from "@/features/about/components/AboutTimeline";
import AboutWhatWeDo from "@/features/about/components/AboutWhatWeDo";
import AboutTeamStats from "@/features/about/components/AboutTeamStats";

export async function generateMetadata(): Promise<Metadata> {
  const title = await tServer("general.about");
  const description = await tServer("about");
  return buildMetadata({
    title,
    description,
    alternates: { canonical: "/about" },
  });
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutExpertise />
      <AboutWhatWeDo />
      <AboutTimeline />
      <AboutTeamStats />
      <AboutTeamMembers />
      <AboutContactCta />
    </>
  );
}
