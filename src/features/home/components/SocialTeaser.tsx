"use client";

import { Section } from "@/components/ui/Section";
import { CtaPanel } from "./CtaPanel";
import { useI18n } from "@/lib/i18n";

export function SocialTeaser() {
  const { t } = useI18n();

  return (
    <Section id="social" className="py-10 md:py-16">
      <CtaPanel
        title={t("general.social")}
        body={t("social.text")}
        href="/social"
        ctaLabel={t("social.viewMore")}
        imgSrc="/resimler/cikartmalar/medya.png"
        imgAlt="Slipyme social media"
        variant="violet"
      />
    </Section>
  );
}
