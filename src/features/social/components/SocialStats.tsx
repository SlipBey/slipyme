"use client";

import { useEffect, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Link } from "@/components/ui/Link";
import api from "@/lib/api";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import {
  FiRefreshCcw,
  FiYoutube,
  FiInstagram,
  FiArrowRight,
} from "react-icons/fi";

type StatsResponse = {
  updatedAt: string;
  instagram: { followers: number; mediaCount: number };
  youtube: { subs: number; views: number };
};

const fmt = (n: number) =>
  Number.isFinite(n) ? new Intl.NumberFormat("tr-TR").format(n) : "0";

export function SocialStats() {
  const { t } = useI18n();
  const [stats, setStats] = useState<StatsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  async function load() {
    setLoading(true);
    setErr(null);
    try {
      const { data } = await api.get<StatsResponse>("/api/social/stats");
      setStats(data ?? null);
    } catch (e) {
      setErr(t("social.errors.stats"));
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <Section id="stats" className="py-8 md:py-12 pb-4!">
      {err && !loading ? (
        <div
          className="rounded-2xl ring-1 ring-rose-500/20 bg-rose-50 text-rose-700
                        dark:bg-rose-500/10 dark:text-rose-200
                        p-4 flex items-center justify-between mb-12"
        >
          <span className="text-sm">{err}</span>
          <button
            onClick={load}
            className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-md
                       bg-black/5 hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20 transition"
          >
            <FiRefreshCcw size={14} aria-hidden />
            {t("social.common.retry")}
          </button>
        </div>
      ) : null}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PlatformCard
          loading={loading}
          title="YouTube"
          href="/youtube"
          icon={<FiYoutube size={16} aria-hidden />}
          rows={
            stats?.youtube
              ? [
                  [t("social.stats.badges.subs"), fmt(stats.youtube.subs)],
                  [t("social.stats.badges.views"), fmt(stats.youtube.views)],
                ]
              : []
          }
          accent="from-red-500 via-rose-600 to-red-700"
        />
        <PlatformCard
          loading={loading}
          title="Instagram"
          href="/instagram"
          icon={<FiInstagram size={16} aria-hidden />}
          rows={
            stats?.instagram
              ? [
                  [
                    t("social.stats.badges.fallowers"),
                    fmt(stats.instagram.followers),
                  ],
                  [
                    t("social.stats.badges.media"),
                    fmt(stats.instagram.mediaCount),
                  ],
                ]
              : []
          }
          accent="from-pink-500 via-pink-600 to-fuchsia-600"
        />
      </div>

      {stats?.updatedAt ? (
        <div className="mt-4 text-xs opacity-60 text-center md:text-left">
          {t("social.stats.updatedAt")}{" "}
          {new Date(stats.updatedAt).toLocaleString("tr-TR")}
        </div>
      ) : null}
    </Section>
  );
}

function PlatformCard({
  title,
  icon,
  href,
  rows,
  loading,
  accent,
}: {
  title: string;
  icon: ReactNode;
  href: string;
  rows: [string, string][];
  loading: boolean;
  accent: string;
}) {
  const { t } = useI18n();
  return (
    <Link
      blank
      href={href}
      aria-label={`${title} ${t("social.viewMore")}`}
      className="group block relative rounded-2xl overflow-hidden glass
                 ring-1 ring-black/5 dark:ring-white/10
                 hover:shadow-lg hover:ring-sky-500/40 transition-all
                 dark:hover:shadow-[0_0_24px_-6px_rgba(56,189,248,0.4)]"
    >
      <div className={cn("h-1.5 w-full bg-linear-to-r opacity-90", accent)} />

      <div className="p-5">
        <div className="flex items-center justify-between">
          <span
            className="inline-flex items-center gap-2 rounded-md px-2 py-1 text-xs font-semibold
                           bg-black/5 text-zinc-700 dark:bg-white/10 dark:text-zinc-200"
          >
            {icon}
            <span>{title}</span>
          </span>

          {loading ? (
            <span className="relative flex h-2 w-2">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full
                               bg-zinc-400 dark:bg-white/50 opacity-75"
              />
              <span
                className="relative inline-flex rounded-full h-2 w-2
                               bg-zinc-700 dark:bg-white/80"
              />
            </span>
          ) : null}
        </div>

        {loading ? (
          <SkeletonRows />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
            className="space-y-3 mt-4"
          >
            {rows.map(([l, v]) => (
              <div key={l} className="flex items-end justify-between">
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  {l}
                </span>
                <span className="text-xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
                  {v}
                </span>
              </div>
            ))}
          </motion.div>
        )}
      </div>

      <div className="px-5 pb-4">
        <div className="mt-3 h-px w-full bg-black/5 dark:bg-white/10" />
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs text-zinc-500 dark:text-zinc-400">
            {title}
          </span>
          <span
            className="inline-flex items-center gap-1 text-sm font-medium
                           text-zinc-600 dark:text-zinc-300
                           group-hover:text-sky-700 dark:group-hover:text-sky-300 transition-colors"
          >
            {`${title} ${t("social.viewMore")}`}
            <FiArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </span>
        </div>
      </div>
    </Link>
  );
}

function SkeletonRows() {
  return (
    <div className="space-y-3 mt-4">
      {[0, 1].map((i) => (
        <div key={i} className="flex items-end justify-between">
          <span className="h-3 w-24 rounded animate-pulse bg-zinc-200/60 dark:bg-white/10" />
          <span className="h-4 w-16 rounded animate-pulse bg-zinc-200/60 dark:bg-white/15" />
        </div>
      ))}
    </div>
  );
}
