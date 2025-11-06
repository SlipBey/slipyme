"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NotFoundClient() {
  const router = useRouter();
  const { t } = useI18n();

  useEffect(() => {
    const timeout = setTimeout(() => router.push("/"), 8000);
    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className="relative p-10 overflow-hidden flex items-center justify-center bg-[#0f172a] dark:bg-[#0c0f14] text-white rounded-xl mt-5">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center px-6 max-w-2xl"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto mb-6"
        >
          <Image
            src="/resimler/404.png"
            alt={t("error404.imageAlt")}
            width={224}
            height={224}
            sizes="(min-width:640px) 224px, 160px"
            priority
            className="mx-auto w-40 sm:w-56 drop-shadow-xl"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-4xl font-extrabold tracking-tight bg-linear-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent"
        >
          {t("error404.title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-zinc-300 text-base sm:text-lg"
        >
          {t("error404.description")}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-sm text-zinc-400 italic"
        >
          {t("error404.redirect")}
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-sky-900/70 to-transparent overflow-hidden"
      >
        <Image
          src="/resimler/penguin.png"
          alt={t("error404.swimmingAlt")}
          width={112}
          height={112}
          sizes="(min-width:640px) 112px, 96px"
          loading="lazy"
          className="w-24 sm:w-28 absolute left-0 bottom-0 animate-[swim_8s_linear_infinite]"
        />
      </motion.div>
    </div>
  );
}
