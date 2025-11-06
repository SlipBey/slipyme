"use client";

import { AnimatedSection } from "@/components/Globals/AnimatedSection";
import { motion } from "framer-motion";
import { fadeIn } from "@/libs/animations";
import Image from "next/image";
import { CtaPanel } from "./CTAPanel";
import { useI18n } from "@/lib/i18n";

export default function CsrSection() {
  const { t } = useI18n();

  return (
    <AnimatedSection id="csr" className="py-5 sm:py-12" mode="view">
      <div className="relative mx-auto">
        <Image
          src="/resimler/pengu_mutlu.png"
          alt="pengu"
          aria-hidden="true"
          width={87}
          height={128}
          loading="lazy"
          sizes="(min-width:1024px) 144px, 112px"
          className="hidden md:block absolute -left-11 lg:-left-16 bottom-[-18px]
             h-36 lg:h-44 w-auto drop-shadow-xl pointer-events-none select-none"
        />
        <motion.div variants={fadeIn}>
          <CtaPanel
            title={t("general.csr")}
            body={t("csr.text")}
            href="/social-responsibility"
            imgSrc="/resimler/pengukalp.png"
            imgAlt="Sosyal sorumluluk"
            rightDecor={
              <>
                <Image
                  src="/resimler/penguyildiz.png"
                  alt=""
                  aria-hidden="true"
                  width={32}
                  height={32}
                  loading="lazy"
                  sizes="32px"
                  className="hidden sm:block absolute -top-3 -right-3 w-8 drop-shadow"
                />
                <Image
                  src="/resimler/pengu_tatli.png"
                  alt=""
                  aria-hidden="true"
                  width={40}
                  height={40}
                  loading="lazy"
                  sizes="40px"
                  className="hidden sm:block absolute -bottom-4 -left-4 w-10 rotate-6 drop-shadow"
                />
              </>
            }
          />
        </motion.div>
        <Image
          src="/resimler/pengu_mutlu.png"
          alt="pengu"
          aria-hidden="true"
          width={87}
          height={128}
          loading="lazy"
          sizes="80px"
          className="md:hidden absolute left-[-22px] -bottom-3
             h-20 w-auto drop-shadow-xl pointer-events-none select-none"
        />
      </div>
    </AnimatedSection>
  );
}
