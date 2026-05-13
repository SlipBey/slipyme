"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Link } from "@/components/ui/Link";
import { useI18n } from "@/lib/i18n";
import {
  FiArrowLeft,
  FiArrowRight,
  FiDownload,
  FiExternalLink,
  FiX,
} from "react-icons/fi";

type ImageGalleryModalProps = {
  images: string[];
  isOpen: boolean;
  currentIndex: number;
  onClose: () => void;
  onChange: (newIndex: number) => void;
};

export function ImageGalleryModal({
  images,
  isOpen,
  currentIndex,
  onClose,
  onChange,
}: ImageGalleryModalProps) {
  const { t } = useI18n();
  const currentImage = images[currentIndex];

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange((currentIndex + 1) % images.length);
      if (e.key === "ArrowLeft")
        onChange((currentIndex - 1 + images.length) % images.length);
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, currentIndex, images.length, onClose, onChange]);

  if (!images.length) return null;

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-1000 flex items-center justify-center
                     bg-black/80 backdrop-blur-md p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            layout
            className="relative w-full max-w-7xl mx-auto rounded-2xl overflow-hidden
                       ring-1 ring-white/10 bg-zinc-900/80 backdrop-blur-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-3 right-3 flex items-center gap-1 z-10">
              <Link
                href={currentImage}
                blank
                aria-label={t("gallery.openNewTab")}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition"
              >
                <FiExternalLink size={18} aria-hidden />
              </Link>
              <Link
                href={currentImage}
                download
                aria-label={t("gallery.download")}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition"
              >
                <FiDownload size={18} aria-hidden />
              </Link>
              <button
                onClick={onClose}
                aria-label={t("common.close")}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition"
              >
                <FiX size={18} aria-hidden />
              </button>
            </div>

            <div className="min-h-[70vh] flex items-center justify-center relative px-12 py-6">
              <button
                onClick={() =>
                  onChange((currentIndex - 1 + images.length) % images.length)
                }
                aria-label={t("common.previous")}
                className="absolute left-3 md:left-6 z-10 p-3 rounded-full
                           bg-white/10 hover:bg-white/20 text-white transition"
              >
                <FiArrowLeft size={20} aria-hidden />
              </button>

              <Image
                src={currentImage}
                alt=""
                width={1280}
                height={800}
                loading="lazy"
                sizes="90vw"
                className="max-h-[80vh] max-w-full rounded-lg shadow-lg ring-1 ring-white/10"
              />

              <button
                onClick={() => onChange((currentIndex + 1) % images.length)}
                aria-label={t("common.next")}
                className="absolute right-3 md:right-6 z-10 p-3 rounded-full
                           bg-white/10 hover:bg-white/20 text-white transition"
              >
                <FiArrowRight size={20} aria-hidden />
              </button>
            </div>

            <div
              className="flex items-center justify-center overflow-x-auto gap-2 py-4 px-3
                            border-t border-white/10 bg-zinc-900/60"
            >
              {images.map((img, idx) => (
                <button
                  key={`${img}-${idx}`}
                  onClick={() => onChange(idx)}
                  aria-label={t("gallery.preview", { number: idx + 1 })}
                  className={`relative h-16 w-16 shrink-0 rounded-lg overflow-hidden ring-2
                              transition ${
                                idx === currentIndex
                                  ? "ring-sky-500"
                                  : "ring-transparent hover:ring-white/40"
                              }`}
                >
                  <Image
                    src={img}
                    alt=""
                    width={64}
                    height={64}
                    loading="lazy"
                    sizes="64px"
                    className="object-cover h-full w-full"
                  />
                  {idx !== currentIndex ? (
                    <span
                      className="absolute inset-0 bg-black/40"
                      aria-hidden
                    />
                  ) : null}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
