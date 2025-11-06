"use client";

import { AnimatedSection } from "@/components/Globals/AnimatedSection";
import Image from "next/image";
import { Link } from "@/components/Globals/Link";
import { m } from "framer-motion";
import { fadeInUp, fadeIn, staggerContainer } from "@/libs/animations";
import { useI18n } from "@/lib/i18n";
import { DESIGN_SHOWCASE_IMAGES } from "../libs/design";
import { ImageGalleryModal } from "@/features/media/components/Modal";
import { useState } from "react";

export default function DesignShowcaseSection({ max = 12 }: { max?: number }) {
  const { t } = useI18n();
  const imgs = DESIGN_SHOWCASE_IMAGES.slice(0, max);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [modalIndex, setModalIndex] = useState(0);

  const openGallery = (images: ReadonlyArray<string>, index: number) => {
    setModalImages([...images]);
    setModalIndex(index);
    setModalOpen(true);
  };

  return (
    <AnimatedSection id="design-showcase" className="py-8 sm:py-10" mode="view">
      <div>
        <m.h2 className="typo-section-title mb-2" variants={fadeInUp}>
          {t("design.showcase.title")}
        </m.h2>

        <m.div
          className="rounded-2xl bg-white dark:bg-[#16181d] ring-1 ring-black/10 dark:ring-white/10 p-4 sm:p-6"
          variants={fadeIn}
        >
          <m.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4"
            variants={staggerContainer}
          >
            {imgs.map((src, i) => (
              <m.button
                key={`${src}-${i}`}
                variants={fadeInUp}
                className="rounded-xl overflow-hidden
                           bg-white dark:bg-[#0f1216]
                           ring-1 ring-black/10 dark:ring-white/10
                           shadow-sm"
                onClick={() => openGallery(imgs, i)}
                aria-label="Görseli aç"
              >
                <div className="aspect-square p-2 flex items-center justify-center">
                  <Image
                    src={src}
                    alt=""
                    width={256}
                    height={256}
                    loading="lazy"
                    sizes="(min-width:1280px) 12.5vw, (min-width:1024px) 16.66vw, (min-width:768px) 25vw, (min-width:640px) 33.33vw, 50vw"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </m.button>
            ))}
          </m.div>
        </m.div>

        <div className="mt-5 flex justify-center">
          <Link
            href="/media"
            aria-label={`${t("design.showcase.title")} — ${t("design.showcase.cta")}`}
          >
            <span className="inline-flex items-center rounded-xl bg-blue-600 text-white px-4 py-2 text-sm font-semibold ring-1 ring-blue-500/60 hover:bg-blue-700">
              {t("design.showcase.cta")}
            </span>
          </Link>
        </div>
      </div>

      <ImageGalleryModal
        images={modalImages}
        isOpen={modalOpen}
        currentIndex={modalIndex}
        onClose={() => setModalOpen(false)}
        onChange={(index) => setModalIndex(index)}
      />
    </AnimatedSection>
  );
}
