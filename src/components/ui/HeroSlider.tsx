"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@/components/ui/Link";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import { FiArrowRight } from "react-icons/fi";

interface Slide {
  langKey: string;
  buttonHref: string;
  image: { thumbnail: string; image: string };
}

interface HeroSliderProps {
  slides: ReadonlyArray<Slide>;
  duration?: number;
}

export function HeroSlider({ slides, duration = 5000 }: HeroSliderProps) {
  const { t } = useI18n();
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (slides.length <= 1) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(
      () => setCurrent((p) => (p + 1) % slides.length),
      duration + 150,
    );
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, slides.length, duration]);

  const slide = slides[current];

  return (
    <div className="w-full flex flex-col-reverse lg:flex-row gap-4">
      <div className="relative flex flex-col w-full">
        {slides.length > 1 ? (
          <div className="relative h-0.5 overflow-hidden rounded-t-2xl bg-sky-500/10 dark:bg-white/5">
            <motion.div
              key={current}
              className="absolute left-0 top-0 h-full bg-linear-to-r from-sky-500 via-cyan-400 to-blue-500"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: duration / 1000, ease: "linear" }}
            />
          </div>
        ) : null}

        <div
          className="relative w-full min-h-107.5 sm:min-h-90 md:min-h-105 2xl:min-h-130
                        overflow-hidden rounded-b-2xl
                        liquid-glass"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="absolute inset-0 flex flex-col-reverse sm:flex-row items-center
                         justify-between gap-4 p-6 md:p-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.78, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left max-w-xl">
                <span className="typo-eyebrow mb-2">{t("home.eyebrow")}</span>
                <h1 className="typo-display text-2xl sm:text-3xl lg:text-5xl">
                  {t(`${slide.langKey}.title`)}
                </h1>
                <p className="mt-3 typo-body max-w-md">
                  {t(`${slide.langKey}.text`)}
                </p>
                <Link
                  href={slide.buttonHref}
                  className="group mt-6 inline-flex items-center gap-2 rounded-xl
                             bg-sky-600 hover:bg-sky-500 text-white font-semibold
                             px-5 py-2.5 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-20px_rgba(14,165,233,.85)]
                             dark:bg-sky-500 dark:hover:bg-sky-400
                             dark:shadow-[0_0_24px_-4px_rgba(56,189,248,0.55)]
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                >
                  <span>{t(`${slide.langKey}.button.text`)}</span>
                  <FiArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
              </div>

              <motion.div
                className="relative shrink-0 parallax-soft float-slow"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.82, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 -z-10 rounded-3xl
                             bg-linear-to-br from-sky-400/30 via-cyan-300/20 to-blue-500/30
                             blur-3xl scale-110"
                />
                <div className="relative w-28 sm:w-44 md:w-56 lg:w-72 aspect-square">
                  <Image
                    src={slide.image.image}
                    alt={t(`${slide.langKey}.title`)}
                    fill
                    sizes="(min-width:1280px) 18rem, (min-width:1024px) 14rem, (min-width:768px) 10rem, 7rem"
                    className="object-contain drop-shadow-xl"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {slides.length > 1 ? (
        <div
          className="flex flex-row lg:flex-col gap-2 lg:w-56 overflow-x-auto overflow-y-hidden lg:overflow-visible"
          style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-x" }}
          role="tablist"
        >
          {slides.map((s, index) => {
            const isActive = index === current;
            return (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                role="tab"
                aria-selected={isActive}
                className={cn(
                  "group relative inline-flex items-center gap-3 rounded-xl px-3 py-2.5",
                  "text-left transition-all duration-300 ease-out whitespace-nowrap lg:whitespace-normal",
                  "ring-1",
                  isActive
                    ? "glass-strong ring-sky-500/40 dark:ring-sky-400/40 dark:shadow-[0_0_18px_-4px_rgba(56,189,248,0.5)]"
                    : "bg-white/40 dark:bg-white/5 ring-black/5 dark:ring-white/10 hover:ring-sky-500/30 dark:hover:ring-sky-400/30",
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    "relative w-10 h-10 lg:w-12 lg:h-12 rounded-lg overflow-hidden shrink-0",
                    "ring-1 ring-black/5 dark:ring-white/10",
                  )}
                >
                  <Image
                    src={s.image.thumbnail}
                    alt=""
                    fill
                    sizes="48px"
                    className="object-cover"
                    loading="lazy"
                  />
                </span>
                <span
                  className={cn(
                    "text-sm font-semibold",
                    isActive
                      ? "text-zinc-900 dark:text-white"
                      : "text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white",
                  )}
                >
                  {t(`${s.langKey}.title`)}
                </span>
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
