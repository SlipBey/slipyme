"use client";

import {
  useEffect,
  type ReactNode,
  type MouseEvent as ReactMouseEvent,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { useI18n } from "@/lib/i18n";
import { FiX } from "react-icons/fi";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  closeOnBackdrop?: boolean;
  ariaLabel?: string;
};

export function Modal({
  open,
  onClose,
  children,
  className,
  closeOnBackdrop = true,
  ariaLabel,
}: ModalProps) {
  const { t } = useI18n();
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
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  const handleBackdrop = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (!closeOnBackdrop) return;
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={ariaLabel}
          className="fixed inset-0 z-100 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onMouseDown={handleBackdrop}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

          <motion.div
            className={cn(
              "relative z-10 w-full max-w-3xl",
              "glass-strong rounded-2xl shadow-2xl",
              "ring-1 ring-black/5 dark:ring-white/10",
              "max-h-[90vh] overflow-auto",
              className,
            )}
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label={t("common.close")}
              className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center
                         rounded-full bg-white/80 hover:bg-white text-zinc-800
                         dark:bg-white/5 dark:hover:bg-white/10 dark:text-zinc-100
                         ring-1 ring-black/5 dark:ring-white/10 transition-colors"
            >
              <FiX size={16} aria-hidden />
            </button>
            {children}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
