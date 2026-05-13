"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Link } from "@/components/ui/Link";
import { Button } from "@/components/ui/Button";
import { PenguMascot } from "@/components/ui/PenguMascot";
import { useI18n } from "@/lib/i18n";
import { FiArrowLeft } from "react-icons/fi";

export default function NotFoundClient() {
  const router = useRouter();
  const { t } = useI18n();

  useEffect(() => {
    const timeout = setTimeout(() => router.push("/"), 12000);
    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div
      className="relative my-8 overflow-hidden rounded-3xl
                 bg-linear-to-br from-zinc-900 via-[#0a1929] to-[#06141f]
                 ring-1 ring-white/10 shadow-2xl
                 px-6 sm:px-10 py-16 sm:py-20 text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full
                   bg-sky-500/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-32 h-96 w-96 rounded-full
                   bg-cyan-500/15 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center max-w-2xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto mb-6 flex justify-center"
        >
          <PenguMascot size={176} animated priority />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight
                     bg-linear-to-r from-sky-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent"
        >
          {t("error404.title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 text-zinc-300 text-base sm:text-lg"
        >
          {t("error404.description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-7 flex items-center justify-center"
        >
          <Link href="/">
            <Button size="lg" icon={FiArrowLeft} iconPosition="left">
              {t("error404.cta")}
            </Button>
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-xs text-zinc-500 italic"
        >
          {t("error404.redirect")}
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden
                   bg-linear-to-t from-sky-900/60 to-transparent"
      >
        <Image
          src="/resimler/penguin.png"
          alt={t("error404.swimmingAlt")}
          width={112}
          height={112}
          sizes="(min-width:640px) 112px, 96px"
          loading="lazy"
          className="w-24 sm:w-28 absolute left-0 bottom-0 animate-[swim_10s_linear_infinite]"
        />
      </motion.div>
    </div>
  );
}
