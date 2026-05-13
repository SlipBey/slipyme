"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type TouchEvent as ReactTouchEvent,
} from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@/components/ui/Link";
import { StatusBadge } from "@/components/ui/Badge";
import { ImageGalleryModal } from "@/components/ui/ImageGalleryModal";
import type { Project } from "@/config/projects";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import {
  FiArrowLeft,
  FiArrowRight,
  FiExternalLink,
  FiGithub,
  FiImage,
  FiX,
} from "react-icons/fi";
import { createPortal } from "react-dom";

type ProjectModalProps = {
  open: boolean;
  project: Project | null;
  onClose: () => void;
};

const TAP_THRESHOLD_PX = 12;
const SWIPE_THRESHOLD_PX = 40;
const TAP_TIME_MS = 350;

export function ProjectModal({ open, project, onClose }: ProjectModalProps) {
  const { t } = useI18n();
  const [slide, setSlide] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);

  const startX = useRef<number | null>(null);
  const startY = useRef<number | null>(null);
  const startTime = useRef(0);
  const swiped = useRef(false);

  const gallery = useMemo(() => project?.gallery ?? [], [project]);

  useEffect(() => setSlide(0), [open, project?.langKey]);

  useEffect(() => {
    if (!open) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !galleryOpen) onClose();

      if (galleryOpen || !gallery.length) return;

      if (e.key === "ArrowRight") setSlide((i) => (i + 1) % gallery.length);

      if (e.key === "ArrowLeft") {
        setSlide((i) => (i - 1 + gallery.length) % gallery.length);
      }
    };

    window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);
  }, [open, gallery.length, onClose, galleryOpen]);

  const onTouchStart = useCallback((e: ReactTouchEvent<HTMLDivElement>) => {
    const tch = e.touches[0];

    startX.current = tch.clientX;
    startY.current = tch.clientY;
    startTime.current = Date.now();
    swiped.current = false;
  }, []);

  const onTouchMove = useCallback((e: ReactTouchEvent<HTMLDivElement>) => {
    if (startX.current == null || startY.current == null) return;

    const tch = e.touches[0];
    const dx = tch.clientX - startX.current;
    const dy = tch.clientY - startY.current;

    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > SWIPE_THRESHOLD_PX) {
      swiped.current = true;
    }
  }, []);

  const onTouchEnd = useCallback(
    (e: ReactTouchEvent<HTMLDivElement>) => {
      if (startX.current == null || startY.current == null || !gallery.length) {
        return;
      }

      const dx = e.changedTouches[0].clientX - startX.current;
      const dy = e.changedTouches[0].clientY - startY.current;
      const dt = Date.now() - startTime.current;

      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > SWIPE_THRESHOLD_PX) {
        if (dx > 0) setSlide((i) => (i - 1 + gallery.length) % gallery.length);
        else setSlide((i) => (i + 1) % gallery.length);

        swiped.current = true;
      }

      const isTap =
        !swiped.current &&
        dt <= TAP_TIME_MS &&
        Math.abs(dx) <= TAP_THRESHOLD_PX &&
        Math.abs(dy) <= TAP_THRESHOLD_PX;

      if (isTap) setGalleryOpen(true);

      startX.current = null;
      startY.current = null;
    },
    [gallery.length],
  );

  const goToPrev = useCallback(
    () => setSlide((i) => (i - 1 + gallery.length) % gallery.length),
    [gallery.length],
  );

  const goToNext = useCallback(
    () => setSlide((i) => (i + 1) % gallery.length),
    [gallery.length],
  );

  if (!project) return null;

  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window ||
      (navigator?.maxTouchPoints && navigator.maxTouchPoints > 0));

  const liveAvailable = !!project.liveUrl && project.status !== "archived";

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !project) return null;

  return createPortal(
    <>
      <AnimatePresence>
        {open ? (
          <motion.div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) onClose();
            }}
          >
            <div
              className="absolute inset-0 bg-black/75 backdrop-blur-md"
              aria-hidden
            />

            <motion.div
              className="relative z-10 flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl
                         glass-strong shadow-2xl ring-1 ring-black/5 dark:ring-white/10"
              initial={{ opacity: 0, scale: 0.97, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 10 }}
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="sticky top-0 z-20 flex items-center gap-3 border-b border-black/5
                           bg-white/90 p-4 backdrop-blur-md dark:border-white/10 dark:bg-zinc-950/90"
              >
                <Image
                  src={project.image}
                  alt=""
                  width={36}
                  height={36}
                  loading="lazy"
                  sizes="36px"
                  className="h-9 w-9 rounded-lg object-contain ring-1 ring-black/5 dark:ring-white/10"
                />

                <div className="min-w-0 flex-1">
                  <div className="truncate text-base font-bold text-zinc-900 dark:text-zinc-50 sm:text-lg">
                    {t(`${project.langKey}.title`)}
                  </div>
                </div>

                <StatusBadge
                  status={project.status}
                  label={t(`projects.status.${project.status}`)}
                />

                <button
                  onClick={onClose}
                  aria-label={t("common.close")}
                  className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-full
                             bg-zinc-100/80 text-zinc-800 ring-1 ring-black/5 transition-colors
                             hover:bg-zinc-200 dark:bg-white/5 dark:text-zinc-100
                             dark:ring-white/10 dark:hover:bg-white/10"
                >
                  <FiX size={16} aria-hidden />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-7">
                <p className="typo-body max-w-5xl">
                  {t(`${project.langKey}.description`)}
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  {liveAvailable ? (
                    <Link
                      href={project.liveUrl as string}
                      blank
                      className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-4 py-2
                                 text-sm font-semibold text-white transition-colors hover:bg-sky-700
                                 dark:bg-sky-500 dark:hover:bg-sky-400"
                    >
                      <FiExternalLink size={14} aria-hidden />
                      {t("projects.site")}
                    </Link>
                  ) : null}

                  {project.githubUrl ? (
                    <Link
                      href={project.githubUrl}
                      blank
                      className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-4 py-2
                                 text-sm font-semibold text-white transition-colors hover:bg-zinc-800
                                 dark:bg-white/10 dark:hover:bg-white/15"
                    >
                      <FiGithub size={14} aria-hidden />
                      {t("projects.github")}
                    </Link>
                  ) : null}
                </div>

                {gallery.length > 0 ? (
                  <div className="mt-7 border-t border-black/10 pt-5 dark:border-white/10">
                    <div
                      className={cn(
                        "relative flex w-full items-center justify-center overflow-hidden rounded-2xl select-none",
                        "bg-white dark:bg-zinc-950/80 ring-1 ring-black/10 dark:ring-white/10",
                        "min-h-80 max-h-[62vh] p-2 sm:min-h-105 sm:p-4",
                        isTouchDevice
                          ? "touch-pan-y cursor-default"
                          : "group cursor-pointer",
                      )}
                      onClick={(e) => {
                        if (isTouchDevice) return;

                        e.stopPropagation();
                        setGalleryOpen(true);
                      }}
                      onTouchStart={onTouchStart}
                      onTouchMove={onTouchMove}
                      onTouchEnd={onTouchEnd}
                    >
                      <Image
                        src={gallery[slide]}
                        alt=""
                        width={1440}
                        height={900}
                        loading="lazy"
                        sizes="(min-width:1280px) 1024px, 92vw"
                        className="max-h-[58vh] w-full rounded-xl object-contain transition-transform duration-500 ease-out group-hover:scale-[1.01]"
                      />

                      {gallery.length > 1 ? (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              goToPrev();
                            }}
                            className="absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2
                                       items-center justify-center rounded-full bg-white/90
                                       opacity-0 ring-1 ring-black/10 transition hover:bg-white
                                       group-hover:opacity-100 dark:bg-zinc-900/90
                                       dark:ring-white/10 dark:hover:bg-zinc-800"
                            aria-label={t("projects.details.prev")}
                          >
                            <FiArrowLeft size={16} aria-hidden />
                          </button>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              goToNext();
                            }}
                            className="absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2
                                       items-center justify-center rounded-full bg-white/90
                                       opacity-0 ring-1 ring-black/10 transition hover:bg-white
                                       group-hover:opacity-100 dark:bg-zinc-900/90
                                       dark:ring-white/10 dark:hover:bg-zinc-800"
                            aria-label={t("projects.details.next")}
                          >
                            <FiArrowRight size={16} aria-hidden />
                          </button>
                        </>
                      ) : null}

                      {!isTouchDevice ? (
                        <div
                          className="pointer-events-none absolute inset-0 flex items-center justify-center
                                     bg-black/20 opacity-0 transition group-hover:opacity-100"
                        >
                          <span
                            className="inline-flex items-center gap-2 rounded-xl bg-black/65 px-4 py-2
                                       text-sm font-semibold text-white backdrop-blur-md"
                          >
                            <FiImage size={14} aria-hidden />
                            {t("projects.details.clickToOpen")}
                          </span>
                        </div>
                      ) : (
                        <div className="absolute inset-x-0 bottom-3 flex items-center justify-center px-3">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setGalleryOpen(true);
                            }}
                            className="inline-flex items-center gap-2 rounded-full bg-black/70 px-4 py-2
                                       text-sm font-semibold text-white ring-1 ring-white/20
                                       backdrop-blur-md transition active:scale-[.98]"
                          >
                            <FiImage size={14} aria-hidden />
                            {t("projects.details.clickToOpen")}
                          </button>
                        </div>
                      )}
                    </div>

                    {gallery.length > 1 ? (
                      <div className="mt-3 flex items-center justify-center gap-2">
                        {gallery.map((_, i) => (
                          <button
                            key={i}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSlide(i);
                            }}
                            aria-label={`Go to slide ${i + 1}`}
                            className={cn(
                              "h-1.5 rounded-full transition-all",
                              i === slide
                                ? "w-6 bg-sky-500"
                                : "w-2 bg-zinc-300 dark:bg-white/20",
                            )}
                          />
                        ))}
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {gallery.length > 0 ? (
        <ImageGalleryModal
          images={gallery}
          isOpen={galleryOpen}
          currentIndex={slide}
          onClose={() => setGalleryOpen(false)}
          onChange={setSlide}
        />
      ) : null}
    </>,
    document.body,
  );
}
