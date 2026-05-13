"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { ImageGalleryModal } from "@/components/ui/ImageGalleryModal";
import { fadeIn, fadeInUp, stagger } from "@/lib/motion";
import { useI18n } from "@/lib/i18n";
import { MEDIA_DATA } from "./lib/media";
import { cn } from "@/lib/cn";

export default function MediaClient() {
  const { t } = useI18n();

  const TABS = useMemo(
    () => [
      { key: "all", label: t("media.categories.all") },
      ...MEDIA_DATA.map((g) => ({
        key: g.key,
        label: t(`media.categories.${g.key}`),
      })),
    ],
    [t],
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
    if (activeTab === "all") return MEDIA_DATA;
    const group = MEDIA_DATA.find((g) => g.key === activeTab);
    return group ? [group] : [];
  }, [activeTab]);

  return (
    <>
      <Section id="media-hero" className="py-8 md:py-12" animate={false}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl ring-1 ring-white/15 shadow-2xl
               bg-linear-to-br from-sky-700 via-sky-600 to-cyan-500
               dark:from-[#0a1929] dark:via-[#0c2236] dark:to-[#0a2c44]
               px-6 sm:px-10 lg:px-14 py-10 md:py-14
               flex flex-col md:flex-row items-center justify-between gap-8 text-white"
        >
          <motion.div
            aria-hidden
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full
                 bg-white/15 blur-3xl"
          />

          <div className="flex-1 relative">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.35,
                delay: 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block typo-eyebrow text-white/80!"
            >
              {t("home.eyebrow")}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.42,
                delay: 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="typo-display text-3xl md:text-4xl lg:text-5xl text-white! mt-3"
            >
              {t("media.title")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.42,
                delay: 0.16,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-3 text-white/85 max-w-2xl text-sm md:text-base"
            >
              {t("media.text")}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ rotate: 3, scale: 1.04 }}
            transition={{
              duration: 0.45,
              delay: 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="shrink-0 select-none"
          >
            <Image
              src="/resimler/cikartmalar/camera.png"
              alt=""
              aria-hidden
              width={180}
              height={180}
              priority
              sizes="(min-width:768px) 180px, 120px"
              className="h-auto w-32 drop-shadow-2xl md:w-44"
            />
          </motion.div>
        </motion.div>
      </Section>

      <Section id="media-tabs" className="px-2 sm:px-0">
        <motion.div
          variants={stagger}
          className="category-orb-shell flex w-fit max-w-full flex-wrap items-center gap-2.5 rounded-4xl p-2"
        >
          {TABS.map((tab) => {
            const active = tab.key === activeTab;
            return (
              <motion.button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={cn(
                  "category-orb px-4 py-2 rounded-full text-sm font-black ring-1",
                  active
                    ? "category-orb-active text-white ring-sky-300/70"
                    : "text-zinc-700 dark:text-zinc-300 ring-sky-900/10 dark:ring-white/10",
                )}
                data-active={active ? "true" : "false"}
                variants={fadeInUp}
                whileTap={{ scale: 0.97 }}
              >
                {tab.label}
              </motion.button>
            );
          })}
        </motion.div>
      </Section>

      <Section id="media-grid" className="py-8 md:py-12" animate={false}>
        <div className="space-y-10">
          {visibleGroups.map((media, idx) => (
            <div
              key={media.key}
              className="media-panel-accent relative overflow-hidden rounded-2xl glass ring-1 ring-black/5 dark:ring-white/10 p-4 sm:p-6"
            >
              {activeTab === "all" ? (
                <h2 className="typo-section-title mb-4">
                  {t(`media.categories.${media.key}`)}
                </h2>
              ) : null}

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
                {media.photos.map((photo, key) => {
                  const shouldEagerLoad = idx === 0 && key < 8;

                  return (
                    <button
                      key={`${media.key}-${photo}-${key}`}
                      type="button"
                      onClick={() => openGallery(media.photos, key)}
                      className="group relative overflow-hidden rounded-xl
                           bg-zinc-100/60 ring-1 ring-black/5
                           transition-[box-shadow,border-color,background-color,opacity]
                           duration-300 ease-out hover:ring-sky-500/40
                           dark:bg-zinc-900/40 dark:ring-white/10"
                      aria-label={t("gallery.open")}
                    >
                      <div className="relative aspect-square p-2">
                        <Image
                          src={photo}
                          alt=""
                          width={256}
                          height={256}
                          loading={shouldEagerLoad ? "eager" : "lazy"}
                          sizes="(min-width:1280px) 12.5vw, (min-width:1024px) 16.66vw, (min-width:768px) 25vw, (min-width:640px) 33.33vw, 50vw"
                          className="h-full w-full object-contain transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <ImageGalleryModal
        images={modalImages}
        isOpen={modalOpen}
        currentIndex={modalIndex}
        onClose={() => setModalOpen(false)}
        onChange={setModalIndex}
      />
    </>
  );
}
