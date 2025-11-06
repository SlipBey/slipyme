"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/Globals/AnimatedSection";
import Image from "next/image";
import { fadeIn, fadeInUp, staggerContainer } from "@/libs/animations";
import { useI18n } from "@/lib/i18n";
import { MEDIA_DATA } from "./libs/media";
import { ImageGalleryModal } from "./components/Modal";

export default function MediaClient() {
  const { t } = useI18n();

  const MEDIA = useMemo(() => MEDIA_DATA, []);
  const TABS = useMemo(
    () => [
      { key: "all", label: t("media.categories.all") },
      ...MEDIA.map((g) => ({
        key: g.key,
        label: t(`media.categories.${g.key}`),
      })),
    ],
    [MEDIA, t],
  );

  const [activeTab, setActiveTab] = useState<string>("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [modalIndex, setModalIndex] = useState(0);

  const openGallery = (images: ReadonlyArray<string>, index: number) => {
    setModalImages([...images]);
    setModalIndex(index);
    setModalOpen(true);
  };

  const visibleGroups = useMemo(() => {
    if (activeTab === "all") return MEDIA;
    const group = MEDIA.find((g) => g.key === activeTab);
    return group ? [group] : [];
  }, [activeTab, MEDIA]);

  return (
    <>
      <AnimatedSection id="media-hero" className="py-5 sm:py-12" mode="mount">
        <motion.div
          variants={fadeIn}
          className="relative overflow-hidden rounded-2xl ring-1 ring-black/10 dark:ring-white/10
                     bg-linear-to-r from-sky-900/80 via-sky-800/80 to-sky-700/80
                     dark:from-[#0c1824] dark:via-[#0e1d2c] dark:to-[#0f2133]
                     shadow-xl px-6 sm:px-8 lg:px-12 py-8 md:py-12
                     flex flex-col md:flex-row items-center justify-between gap-8 text-white"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-sky-400 via-sky-300 to-sky-200/90" />

          <div className="flex-1">
            <motion.h1
              variants={fadeInUp}
              className="typo-page-title text-white!"
            >
              {t("media.title")}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mt-2 typo-body text-white/90! max-w-3xl"
            >
              {t("media.text")}
            </motion.p>
          </div>

          <motion.div
            variants={fadeInUp}
            className="shrink-0 select-none"
            whileHover={{ rotate: 3, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
          >
            <Image
              src="/resimler/cikartmalar/camera.png"
              alt=""
              aria-hidden="true"
              width={160}
              height={160}
              priority
              sizes="(min-width:768px) 160px, 120px"
              className="w-30 md:w-40"
            />
          </motion.div>
        </motion.div>
      </AnimatedSection>

      <AnimatedSection
        id="media-tabs"
        className="mx-auto px-2 sm:px-0"
        mode="mount"
      >
        <motion.div
          variants={staggerContainer}
          className="flex flex-wrap items-center gap-2 sm:gap-3"
        >
          {TABS.map((tItem) => {
            const active = tItem.key === activeTab;
            return (
              <motion.button
                key={tItem.key}
                onClick={() => setActiveTab(tItem.key)}
                className={`px-3 py-1.5 rounded-xl text-sm font-medium transition ring-1 ring-black/10 dark:ring-white/10 ${
                  active
                    ? "bg-blue-600 text-white"
                    : "bg-white dark:bg-[#16181d] text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-blue-900/30"
                }`}
                variants={fadeInUp}
                whileTap={{ scale: 0.98 }}
              >
                {tItem.label}
              </motion.button>
            );
          })}
        </motion.div>
      </AnimatedSection>

      <AnimatedSection id="media-grid" className="py-6 sm:py-10" mode="mount">
        <motion.div className="mx-auto space-y-10" variants={fadeInUp}>
          {visibleGroups.map((media, idx) => (
            <div
              key={`${media.key}-${idx}`}
              className="rounded-2xl bg-white dark:bg-[#16181d] ring-1 ring-black/10 dark:ring-white/10 p-4 sm:p-6"
            >
              {activeTab === "all" && (
                <motion.h2
                  className="typo-section-title mb-4"
                  variants={fadeInUp}
                >
                  {t(`media.categories.${media.key}`)}
                </motion.h2>
              )}

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4">
                {media.photos.map((photo, key) => (
                  <motion.button
                    key={`${photo}-${key}`}
                    onClick={() => openGallery(media.photos, key)}
                    className="group relative rounded-xl overflow-hidden bg-slate-100 dark:bg-[#0f1216] ring-1 ring-black/10 dark:ring-white/10"
                    variants={fadeInUp}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    aria-label="Görseli büyüt"
                  >
                    <div className="aspect-square p-2 flex items-center justify-center">
                      <Image
                        src={photo}
                        alt=""
                        width={256}
                        height={256}
                        loading="lazy"
                        sizes="(min-width:1280px) 12.5vw, (min-width:1024px) 16.66vw, (min-width:768px) 25vw, (min-width:640px) 33.33vw, 50vw"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-black/10 dark:bg-white/10" />
                  </motion.button>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatedSection>

      <ImageGalleryModal
        images={modalImages}
        isOpen={modalOpen}
        currentIndex={modalIndex}
        onClose={() => setModalOpen(false)}
        onChange={(index) => setModalIndex(index)}
      />
    </>
  );
}
