import React, { useEffect } from "react";
import { FiX } from "react-icons/fi";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  maxWidth?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  maxWidth = "max-w-lg",
}) => {
  useEffect(() => {
    if (!isOpen) return;
    const handle = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-[95%] ${maxWidth} rounded-2xl
                    bg-white dark:bg-zinc-900 text-black dark:text-gray-100
                    shadow-xl overflow-hidden
                    max-h-[90vh] flex flex-col`}
      >
        <button
          aria-label="Kapat"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 rounded-full p-1 transition
                     hover:bg-gray-100 dark:hover:bg-zinc-800"
        >
          <FiX className="h-5 w-5" aria-hidden="true" focusable="false" />
        </button>

        {children}
      </div>
    </div>
  );
};
