"use client";

import { AnimatedSection } from "@/components/Globals/AnimatedSection";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/libs/animations";
import React, { useMemo } from "react";
import { useI18n } from "@/lib/i18n";
import { RoleTag, MEMBERS, ROLE_CAPS, ROLE_STYLES } from "../libs/team";

type StatItem = { tag: RoleTag; count: number; cap: number };

export default function AboutTeamStats() {
  const { t } = useI18n();

  const byRole = useMemo(() => {
    const map = new Map<RoleTag, number>([
      ["software", 0],
      ["design", 0],
      ["social", 0],
      ["other", 0],
    ]);
    for (const m of MEMBERS) map.set(m.roleTag, (map.get(m.roleTag) ?? 0) + 1);
    return map;
  }, []);

  const STATS: StatItem[] = useMemo(
    () =>
      (Array.from(byRole.entries()) as [RoleTag, number][]).map(
        ([tag, count]) => ({ tag, count, cap: ROLE_CAPS[tag] }),
      ),
    [byRole],
  );

  const present = useMemo(
    () => STATS.reduce((s, x) => s + x.count, 0),
    [STATS],
  );
  const total = useMemo(() => STATS.reduce((s, x) => s + x.cap, 0), [STATS]);

  return (
    <AnimatedSection id="team" className="py-8 md:py-14">
      <motion.div
        className="mb-6 md:mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-3"
        variants={fadeInUp}
      >
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            {t("team.title")}
          </h2>
          <p className="mt-1 text-sm md:text-base opacity-70">
            {t("team.subtitle")}
          </p>
        </div>

        <div
          className="inline-flex items-center gap-2 rounded-2xl px-4 py-2
                        bg-linear-to-r from-sky-600 via-sky-500 to-sky-400
                        text-white shadow"
        >
          <span className="text-sm/none opacity-90">{t("team.total")}</span>
          <span className="text-xl font-bold tabular-nums">
            {present}/{total}
          </span>
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5"
        variants={fadeIn}
      >
        {STATS.map((s, idx) => {
          const pctOfCap =
            s.cap > 0 ? Math.min(100, Math.round((s.count / s.cap) * 100)) : 0;
          const over = s.count > s.cap;
          const styles = ROLE_STYLES[s.tag];

          return (
            <motion.div
              key={s.tag}
              variants={fadeInUp}
              transition={{ delay: 0.03 * idx }}
              className="group rounded-2xl ring-1 ring-black/10 dark:ring-white/10
                         bg-white dark:bg-[#16181d] overflow-hidden shadow-sm
                         hover:shadow-md transition-shadow"
            >
              <div className={`h-1 w-full ${styles.cap}`} />

              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <div className="text-sm opacity-70">
                    {t(`team.stats.${s.tag}`)}
                  </div>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ring ${styles.pill} text-nowrap`}
                    title={t("team.limit")}
                  >
                    {t("team.cap")} {s.cap}
                  </span>
                </div>

                <div className="mt-1 flex items-baseline gap-2">
                  <div
                    className={`text-3xl font-bold tabular-nums ${over ? "text-rose-500" : ""}`}
                  >
                    {s.count}
                  </div>
                  <div className="text-xs opacity-60">/ {s.cap}</div>
                </div>

                <div className="mt-4">
                  <div className="h-2 w-full rounded-full bg-black/5 dark:bg-white/10 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${styles.bar}`}
                      style={{ width: `${pctOfCap}%` }}
                      aria-label={`${pctOfCap}%`}
                    />
                  </div>
                  <div className="mt-1.5 text-xs opacity-60">
                    {pctOfCap}% ({t("team.remaining")}:{" "}
                    {Math.max(0, s.cap - s.count)})
                    {over && (
                      <span className="ml-2 text-rose-500">
                        {t("team.overCap")}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </AnimatedSection>
  );
}
