"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Link } from "@/components/ui/Link";
import { ImageGalleryModal } from "@/components/ui/ImageGalleryModal";
import { fadeIn, fadeInUp, stagger } from "@/lib/motion";
import { useI18n } from "@/lib/i18n";
import { DESIGN_SHOWCASE_IMAGES } from "../lib/design";
import { FiArrowRight } from "react-icons/fi";

type Props = { max?: number };

export function DesignShowcaseSection({ max = 12 }: Props) {
  const { t } = useI18n();
  const imgs = DESIGN_SHOWCASE_IMAGES.slice(0, max);

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openGallery = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <Section id="design-showcase" className="py-8 md:py-12" variants={stagger}>
      <motion.h2 variants={fadeInUp} className="typo-section-title mb-6">
        {t("design.showcase.title")}
      </motion.h2>

      <motion.div
        variants={fadeIn}
        className="rounded-2xl glass ring-1 ring-black/5 dark:ring-white/10 p-4 sm:p-6"
      >
        <motion.div
          variants={stagger}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4"
        >
          {imgs.map((src, i) => (
            <motion.button
              key={`${src}-${i}`}
              variants={fadeInUp}
              onClick={() => openGallery(i)}
              aria-label={t("gallery.open")}
              className="rounded-xl overflow-hidden bg-white/70 dark:bg-zinc-900/40
                         ring-1 ring-black/5 dark:ring-white/10 shadow-sm
                         hover:ring-sky-500/40 transition"
            >
              <div className="aspect-square p-2 flex items-center justify-center">
                <Image
                  src={src}
                  alt=""
                  width={256}
                  height={256}
                  loading="lazy"
                  sizes="(min-width:1280px) 12.5vw, (min-width:1024px) 16.6vw, (min-width:768px) 25vw, (min-width:640px) 33vw, 50vw"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </motion.button>
          ))}
        </motion.div>
      </motion.div>

      <div className="mt-6 flex justify-center">
        <Link
          href="/media"
          className="group inline-flex items-center gap-2 rounded-xl
                     bg-sky-600 hover:bg-sky-700 text-white px-5 py-2.5 text-sm font-semibold
                     dark:bg-sky-500 dark:hover:bg-sky-400
                     dark:shadow-[0_0_18px_-4px_rgba(56,189,248,0.55)]
                     transition-all"
        >
          {t("design.showcase.cta")}
          <FiArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
            aria-hidden
          />
        </Link>
      </div>

      <ImageGalleryModal
        images={imgs}
        isOpen={open}
        currentIndex={index}
        onClose={() => setOpen(false)}
        onChange={setIndex}
      />
    </Section>
  );
}
