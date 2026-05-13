"use client";

import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { CtaPanel } from "./CtaPanel";
import { useI18n } from "@/lib/i18n";

export function CsrTeaser() {
  const { t } = useI18n();

  return (
    <Section id="csr" className="py-10 md:py-16">
      <div className="relative">
        <Image
          src="/resimler/pengu_mutlu.png"
          alt=""
          aria-hidden
          width={120}
          height={170}
          loading="lazy"
          sizes="(min-width:1024px) 144px, 110px"
          className="hidden md:block absolute -left-12 lg:-left-16 -bottom-4
                     h-36 lg:h-44 w-auto drop-shadow-xl pointer-events-none select-none"
        />
        <CtaPanel
          title={t("general.csr")}
          body={t("csr.text")}
          href="/social-responsibility"
          ctaLabel={t("csr.projectDetails")}
          imgSrc="/resimler/pengukalp.png"
          imgAlt="Slipyme social responsibility"
          variant="emerald"
          rightDecor={
            <>
              <Image
                src="/resimler/penguyildiz.png"
                alt=""
                aria-hidden
                width={32}
                height={32}
                loading="lazy"
                sizes="32px"
                className="hidden sm:block absolute -top-3 -right-3 w-8 drop-shadow"
              />
              <Image
                src="/resimler/pengu_tatli.png"
                alt=""
                aria-hidden
                width={40}
                height={40}
                loading="lazy"
                sizes="40px"
                className="hidden sm:block absolute -bottom-4 -left-4 w-10 rotate-6 drop-shadow"
              />
            </>
          }
        />
        <Image
          src="/resimler/pengu_mutlu.png"
          alt=""
          aria-hidden
          width={87}
          height={128}
          loading="lazy"
          sizes="80px"
          className="md:hidden absolute -left-5 -bottom-3 h-20 w-auto
                     drop-shadow-xl pointer-events-none select-none"
        />
      </div>
    </Section>
  );
}
