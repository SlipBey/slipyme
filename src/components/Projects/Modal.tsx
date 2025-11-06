"use client";

import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiExternalLink,
  FiGithub,
  FiImage,
} from "react-icons/fi";
import Image from "next/image";
import { Link } from "@/components/Globals/Link";
import type { Project } from "@/libs/config/projects";
import { Modal } from "../Globals/Modal";
import { useI18n } from "@/lib/i18n";
import { ImageGalleryModal } from "@/features/media/components/Modal";

type Props = {
  open: boolean;
  project: Project | null;
  onClose: () => void;
};

const TAP_THRESHOLD_PX = 12;
const SWIPE_THRESHOLD_PX = 40;
const TAP_TIME_MS = 350;

export default function ProjectModal({ open, project, onClose }: Props) {
  const { t } = useI18n();
  const [slide, setSlide] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const startX = useRef<number | null>(null);
  const startY = useRef<number | null>(null);
  const startTime = useRef<number>(0);
  const swiped = useRef<boolean>(false);

  const gallery = useMemo(() => project?.gallery ?? [], [project]);

  useEffect(() => setSlide(0), [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !isGalleryOpen) onClose();

      if (isGalleryOpen) return;
      if (!gallery.length) return;

      if (e.key === "ArrowRight") setSlide((i) => (i + 1) % gallery.length);
      if (e.key === "ArrowLeft")
        setSlide((i) => (i - 1 + gallery.length) % gallery.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, gallery.length, onClose, isGalleryOpen]);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    const t = e.touches[0];
    startX.current = t.clientX;
    startY.current = t.clientY;
    startTime.current = Date.now();
    swiped.current = false;
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (startX.current == null || startY.current == null) return;
    const t = e.touches[0];
    const dx = t.clientX - startX.current;
    const dy = t.clientY - startY.current;

    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > TAP_THRESHOLD_PX) {
      if (Math.abs(dx) > SWIPE_THRESHOLD_PX) swiped.current = true;
    }
  }, []);

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (startX.current == null || startY.current == null || !gallery.length)
        return;

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

      if (isTap) {
        setIsGalleryOpen(true);
      }

      startX.current = null;
      startY.current = null;
    },
    [gallery.length],
  );

  const goToPrev = useCallback(() => {
    setSlide((i) => (i - 1 + gallery.length) % gallery.length);
  }, [gallery.length]);

  const goToNext = useCallback(() => {
    setSlide((i) => (i + 1) % gallery.length);
  }, [gallery.length]);

  if (!project) return null;

  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window ||
      (navigator.maxTouchPoints && navigator.maxTouchPoints > 0));

  return (
    <>
      <Modal isOpen={open} onClose={onClose} maxWidth="max-w-7xl">
        <div className="flex-1 overflow-y-auto h-full">
          <div
            className="sticky top-0 z-10 flex items-center gap-3 p-4
                       bg-white/90 dark:bg-[#0e1115]/90 backdrop-blur-sm
                       border-b border-black/10 dark:border-white/10 w-full"
          >
            <Image
              src={project.image}
              alt=""
              width={32}
              height={32}
              loading="lazy"
              sizes="32px"
              className="h-8 w-8 rounded object-contain"
            />
            <div className="text-lg font-bold text-slate-900 dark:text-slate-100 truncate flex-1">
              {t(`${project.langKey}.title`)}
            </div>
          </div>

          <div className="px-6 pb-6 pt-4">
            <p className="mt-1 text-base leading-relaxed text-slate-700 dark:text-slate-300">
              {t(`${project.langKey}.description`)}
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {project.liveUrl && project.active && (
                <Link
                  href={project.liveUrl}
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 text-white px-4 py-2 text-sm font-semibold ring-1 ring-blue-500/60 hover:bg-blue-700 transition"
                >
                  <FiExternalLink /> {t("projects.site")}
                </Link>
              )}
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  className="inline-flex items-center gap-2 rounded-lg bg-black text-white px-4 py-2 text-sm font-semibold hover:bg-black/90 dark:bg-zinc-700 dark:hover:bg-zinc-600 transition"
                >
                  <FiGithub /> {t("projects.github")}
                </Link>
              )}
            </div>

            {gallery.length > 0 && (
              <div className="mt-8 pt-4 border-t border-black/10 dark:border-white/10">
                <div
                  className={`
                    relative rounded-xl overflow-hidden select-none w-full
                    h-[60vh] max-h-[600px] min-h-[300px]
                    touch-pan-y
                    ${isTouchDevice ? "cursor-default" : "cursor-pointer group"}
                  `}
                  onClick={(e) => {
                    if (isTouchDevice) return;
                    e.stopPropagation();
                    setIsGalleryOpen(true);
                  }}
                  onTouchStart={onTouchStart}
                  onTouchMove={onTouchMove}
                  onTouchEnd={onTouchEnd}
                >
                  <Image
                    src={gallery[slide]}
                    alt=""
                    width={1280}
                    height={720}
                    loading="lazy"
                    sizes="100vw"
                    className="w-full h-full object-cover bg-center transition duration-500 transform group-hover:scale-[1.03]"
                  />

                  {gallery.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          goToPrev();
                        }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center
                                   rounded-full bg-white/95 dark:bg-[#101318]/95 ring-1 ring-black/10 dark:ring-white/10
                                   hover:bg-white dark:hover:bg-[#12161b] transition
                                   opacity-0 group-hover:opacity-100
                                   disabled:opacity-50"
                        aria-label={t("projects.details.prev")}
                      >
                        <FiChevronLeft aria-hidden="true" focusable="false" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          goToNext();
                        }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center
                                   rounded-full bg-white/95 dark:bg-[#101318]/95 ring-1 ring-black/10 dark:ring-white/10
                                   hover:bg-white dark:hover:bg-[#12161b] transition
                                   opacity-0 group-hover:opacity-100
                                   disabled:opacity-50"
                        aria-label={t("projects.details.next")}
                      >
                        <FiChevronRight aria-hidden="true" focusable="false" />
                      </button>
                    </>
                  )}

                  {!isTouchDevice ? (
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center pointer-events-none">
                      <span className="text-white text-lg font-bold p-3 rounded-xl bg-black/50 backdrop-blur-sm">
                        <FiImage
                          className="text-base inline-block mr-2"
                          aria-hidden="true"
                          focusable="false"
                        />
                        {t("projects.details.clickToOpen")}
                      </span>
                    </div>
                  ) : (
                    <div className="absolute inset-x-0 bottom-3 flex items-center justify-center px-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsGalleryOpen(true);
                        }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                                   bg-black/70 text-white text-sm font-semibold
                                   ring-1 ring-white/20 backdrop-blur-md active:scale-[.98] transition"
                      >
                        <FiImage
                          className="text-base"
                          aria-hidden="true"
                          focusable="false"
                        />
                        {t("projects.details.clickToOpen")}
                      </button>
                    </div>
                  )}
                </div>

                {gallery.length > 1 && (
                  <div className="mt-3 flex items-center justify-center gap-2">
                    {gallery.map((_, i) => (
                      <button
                        key={i}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSlide(i);
                        }}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`h-1.5 w-5 rounded-full transition ${
                          i === slide
                            ? "bg-blue-600"
                            : "bg-slate-300 dark:bg-white/20"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </Modal>

      {gallery.length > 0 && (
        <ImageGalleryModal
          images={gallery}
          isOpen={isGalleryOpen}
          currentIndex={slide}
          onClose={() => setIsGalleryOpen(false)}
          onChange={setSlide}
        />
      )}
    </>
  );
}
