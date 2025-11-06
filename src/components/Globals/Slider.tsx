"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "./Link";
import { useI18n } from "@/lib/i18n";
import Image from "next/image";

interface Slide {
  langKey: string;
  buttonHref: string;
  image: { thumbnail: string; image: string };
}

interface SliderProps {
  slides: ReadonlyArray<Slide>;
}

export default function Slider({ slides }: SliderProps) {
  const { t } = useI18n();
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const duration = 3000;

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    if (slides.length <= 1) return;
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrent((p) => (p + 1) % slides.length),
      duration + 150,
    );
    return resetTimeout;
  }, [current, slides.length]);

  return (
    <div className="w-full h-80 sm:h-[360px] md:h-[420px] 2xl:h-[560px] flex flex-col-reverse lg:flex-row gap-3">
      <div className="h-full relative flex flex-col w-full">
        {slides.length > 1 && (
          <div className="h-1 bg-gray-300 dark:bg-zinc-700 overflow-hidden rounded-t-xl relative">
            <motion.div
              key={current}
              className="absolute left-0 top-0 h-full bg-linear-to-r from-sky-500 via-sky-600 to-blue-600"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: duration / 1000, ease: "linear" }}
            />
          </div>
        )}

        <div className="relative w-full h-full overflow-hidden rounded-b-xl shadow-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="absolute inset-0 w-full h-full flex flex-col-reverse sm:flex-row items-center justify-between text-center md:text-left bg-white dark:bg-zinc-900 p-3 md:p-6 gap-4 text-black dark:text-gray-100"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="flex flex-col items-center md:items-start text-zinc-900 dark:text-zinc-100">
                <h2 className="text-xl sm:text-2xl lg:text-4xl xl:tex-6xl font-extrabold tracking-tight">
                  {t(`${slides[current].langKey}.title`)}
                </h2>
                <p className="mt-2 text-base sm:text-lg lg:text-xl xl:text-2xl text-slate-700 dark:text-slate-300">
                  {t(`${slides[current].langKey}.text`)}
                </p>
                <Link
                  href={slides[current].buttonHref}
                  prefetch={false}
                  className="mt-5 w-fit inline-flex items-center rounded-xl bg-sky-700 hover:bg-sky-800
             text-white px-5 py-2.5 font-semibold focus:outline-none
             focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-300
             focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-900"
                >
                  {t(`${slides[current].langKey}.button.text`)}
                </Link>
              </div>

              <motion.div
                className="relative mx-auto flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <div className="relative w-20 aspect-square md:w-40 lg:w-56 xl:w-72">
                  <Image
                    src={slides[current].image.image}
                    alt={t(`${slides[current].langKey}.title`)}
                    fill
                    sizes="(min-width:1280px) 18rem, (min-width:1024px) 14rem, (min-width:768px) 10rem, 5rem"
                    className="rounded-xl object-cover drop-shadow-md"
                    priority
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/5 dark:ring-white/10" />
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {slides.length > 1 && (
        <div
          className="flex flex-row lg:flex-col gap-5 items-center lg:h-full md:justify-center overflow-x-auto overflow-y-hidden"
          style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-x" }}
        >
          {slides.map((slide, index) => {
            const isActive = index === current;
            return (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`py-2 px-12 rounded-lg w-full inline-flex items-center gap-3 justify-center transition-colors ${
                  isActive
                    ? "bg-blue-200 dark:bg-sky-600"
                    : "bg-white dark:bg-zinc-900 hover:bg-blue-200 dark:hover:bg-sky-600"
                }`}
                disabled={isActive}
              >
                <Image
                  src={slide.image.thumbnail}
                  alt={""}
                  width={48}
                  height={48}
                  className="w-8 h-8 lg:w-12 lg:h-12 aspect-square object-cover rounded-md"
                  sizes="(min-width:1024px) 48px, 32px"
                  loading="lazy"
                />
                <span className="text-sm lg:text-lg font-semibold dark:text-gray-100">
                  {t(`${slide.langKey}.title`)}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
