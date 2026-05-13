"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { fadeIn, fadeInUp, stagger } from "@/lib/motion";
import { useI18n } from "@/lib/i18n";
import { MEMBERS, ROLE_CAPS, ROLE_STYLES, type RoleTag } from "../lib/team";
import { cn } from "@/lib/cn";

type StatItem = { tag: RoleTag; count: number; cap: number };

export function AboutTeamStats() {
  const { t } = useI18n();

  const STATS: StatItem[] = useMemo(() => {
    const counts: Record<RoleTag, number> = {
      software: 0,
      design: 0,
      social: 0,
      other: 0,
    };
    for (const m of MEMBERS) counts[m.roleTag] += 1;
    return (Object.keys(counts) as RoleTag[]).map((tag) => ({
      tag,
      count: counts[tag],
      cap: ROLE_CAPS[tag],
    }));
  }, []);

  const present = STATS.reduce((s, x) => s + x.count, 0);
  const total = STATS.reduce((s, x) => s + x.cap, 0);

  return (
    <Section id="team-stats" className="py-8 md:py-14" variants={stagger}>
      <motion.div
        variants={fadeInUp}
        className="mb-6 md:mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-3"
      >
        <div>
          <h2 className="typo-section-title">{t("team.title")}</h2>
          <p className="typo-body mt-1">{t("team.subtitle")}</p>
        </div>

        <div
          className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 self-start md:self-auto
                     bg-linear-to-r from-sky-600 via-sky-500 to-cyan-500
                     text-white shadow-md
                     dark:shadow-[0_0_24px_-6px_rgba(56,189,248,0.6)]"
        >
          <span className="text-sm/none opacity-90">{t("team.total")}</span>
          <span className="text-xl font-bold tabular-nums">
            {present}/{total}
          </span>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5"
      >
        {STATS.map((s, idx) => {
          const pct =
            s.cap > 0 ? Math.min(100, Math.round((s.count / s.cap) * 100)) : 0;
          const over = s.count > s.cap;
          const styles = ROLE_STYLES[s.tag];

          return (
            <motion.div
              key={s.tag}
              variants={fadeInUp}
              transition={{ delay: 0.04 * idx }}
              className="group rounded-2xl glass ring-1 ring-black/5 dark:ring-white/10
                         overflow-hidden shadow-sm hover:shadow-lg transition-all
                         dark:hover:shadow-[0_0_20px_-6px_rgba(56,189,248,0.35)]"
            >
              <div className={cn("h-1 w-full", styles.cap)} />

              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">
                    {t(`team.stats.${s.tag}`)}
                  </div>
                  <span
                    className={cn(
                      "text-[11px] px-2 py-0.5 rounded-full ring-1 text-nowrap font-semibold",
                      styles.pill,
                    )}
                    title={t("team.limit")}
                  >
                    {t("team.cap")} {s.cap}
                  </span>
                </div>

                <div className="mt-1 flex items-baseline gap-2">
                  <div
                    className={cn(
                      "text-3xl font-bold tabular-nums text-zinc-900 dark:text-zinc-50",
                      over && "text-rose-500!",
                    )}
                  >
                    {s.count}
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-500">
                    / {s.cap}
                  </div>
                </div>

                <div className="mt-4">
                  <div className="h-2 w-full rounded-full bg-zinc-200/70 dark:bg-white/5 overflow-hidden">
                    <div
                      className={cn("h-full rounded-full", styles.bar)}
                      style={{ width: `${pct}%` }}
                      aria-label={`${pct}%`}
                    />
                  </div>
                  <div className="mt-1.5 text-xs text-zinc-500 dark:text-zinc-500">
                    {pct}% ({t("team.remaining")}:{" "}
                    {Math.max(0, s.cap - s.count)})
                    {over ? (
                      <span className="ml-2 text-rose-500 font-semibold">
                        {t("team.overCap")}
                      </span>
                    ) : null}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
