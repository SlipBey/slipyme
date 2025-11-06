import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowLeft,
  FiArrowRight,
  FiDownload,
  FiExternalLink,
  FiX,
} from "react-icons/fi";
import Image from "next/image";
import { Link } from "@/components/Globals/Link";

type Props = {
  images: string[];
  isOpen: boolean;
  currentIndex: number;
  onClose: () => void;
  onChange: (newIndex: number) => void;
};

export const ImageGalleryModal = ({
  images,
  isOpen,
  currentIndex,
  onClose,
  onChange,
}: Props) => {
  const currentImage = images[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange((currentIndex + 1) % images.length);
      if (e.key === "ArrowLeft")
        onChange((currentIndex - 1 + images.length) % images.length);
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, currentIndex, images.length, onClose, onChange]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-1000 flex items-center justify-center bg-black/70 dark:bg-black/80 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            layout
            className="relative w-full max-w-360 mx-auto rounded-2xl overflow-hidden ring-1 ring-white/10 bg-zinc-900/70 dark:bg-zinc-950/60"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-3 right-3 flex items-center gap-1 z-10">
              <Link
                href={currentImage}
                blank
                aria-label="Görseli yeni sekmede aç"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white backdrop-blur-sm transition"
              >
                <FiExternalLink
                  size={18}
                  aria-hidden="true"
                  focusable="false"
                />
              </Link>
              <Link
                href={currentImage}
                download
                aria-label="Görseli indir"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white backdrop-blur-sm transition"
              >
                <FiDownload size={18} aria-hidden="true" focusable="false" />
              </Link>
              <button
                onClick={onClose}
                aria-label="Kapat"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white backdrop-blur-sm transition"
              >
                <FiX size={18} aria-hidden="true" focusable="false" />
              </button>
            </div>

            <div className="min-h-[70vh] flex items-center justify-center relative px-10 py-6">
              <button
                onClick={() =>
                  onChange((currentIndex - 1 + images.length) % images.length)
                }
                aria-label="Önceki görsel"
                className="absolute left-3 md:left-6 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition"
              >
                <FiArrowLeft size={20} aria-hidden="true" focusable="false" />
              </button>

              <Image
                src={currentImage}
                alt=""
                width={1200}
                height={800}
                loading="lazy"
                sizes="90vw"
                className="max-h-[80vh] max-w-full rounded-lg shadow-lg ring-1 ring-white/10"
              />

              <button
                onClick={() => onChange((currentIndex + 1) % images.length)}
                aria-label="Sonraki görsel"
                className="absolute right-3 md:right-6 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition"
              >
                <FiArrowRight size={20} aria-hidden="true" focusable="false" />
              </button>
            </div>

            <div className="flex items-center justify-center overflow-x-auto gap-2 py-4 px-3 border-t border-white/10 bg-zinc-900/60">
              {images.map((img, idx) => (
                <button
                  onClick={() => onChange(idx)}
                  key={idx}
                  aria-label={`Önizleme ${idx + 1}`}
                  className={`relative group h-16 w-16 shrink-0 rounded-lg overflow-hidden ring-2 ${
                    idx === currentIndex
                      ? "ring-sky-500"
                      : "ring-transparent hover:ring-white/40"
                  } transition`}
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
                  {idx !== currentIndex && (
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
