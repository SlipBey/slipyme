"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Link } from "@/components/ui/Link";
import { useI18n } from "@/lib/i18n";
import { MEMBERS, ROLE_STYLES, TEAM_ICONS, type SocialKey } from "../lib/team";
import { fadeIn, fadeInUp, stagger } from "@/lib/motion";
import { cn } from "@/lib/cn";

export function AboutTeamMembers() {
  const { t } = useI18n();

  return (
    <Section id="team-members" className="py-8 md:py-14" variants={stagger}>
      <motion.div variants={fadeInUp} className="mb-6 md:mb-8">
        <h3 className="typo-section-title">{t("team.members.title")}</h3>
        <p className="typo-body mt-1">{t("team.members.subtitle")}</p>
      </motion.div>

      <motion.div
        variants={fadeIn}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
      >
        {MEMBERS.map((m, i) => {
          const styles = ROLE_STYLES[m.roleTag];
          return (
            <motion.article
              key={`${m.nick}-${i}`}
              variants={fadeInUp}
              transition={{ delay: 0.03 * i }}
              className="group rounded-2xl glass overflow-hidden
                         ring-1 ring-black/5 dark:ring-white/10
                         shadow-sm hover:shadow-lg transition-all
                         dark:hover:shadow-[0_0_20px_-6px_rgba(56,189,248,0.4)]"
            >
              <div className={cn("h-1 w-full", styles.cap)} />
              <div className="p-5 flex gap-4">
                <div className="shrink-0">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden ring-1 ring-black/5 dark:ring-white/10">
                    <Image
                      src={m.img}
                      alt={m.name}
                      width={64}
                      height={64}
                      loading="lazy"
                      sizes="64px"
                      className="object-cover w-16 h-16"
                    />
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="text-base md:text-lg font-semibold text-zinc-900 dark:text-zinc-50 truncate">
                      {m.name}
                    </h4>
                    <span
                      className={cn(
                        "text-[10px] md:text-[11px] px-2 py-0.5 rounded-full ring-1 font-semibold",
                        styles.pill,
                      )}
                    >
                      {m.nick}
                    </span>
                  </div>

                  <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400">
                    {t(`team.stats.${m.roleTag}`)}
                  </p>

                  {m.bio ? (
                    <p className="mt-2 text-xs md:text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3">
                      {m.bio}
                    </p>
                  ) : null}

                  {m.links && Object.keys(m.links).length > 0 ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {Object.entries(m.links).map(([key, url]) => {
                        const k = key as SocialKey;
                        if (!url || !(k in TEAM_ICONS)) return null;
                        const Icon = TEAM_ICONS[k];
                        return (
                          <Link
                            key={k}
                            href={url}
                            blank
                            aria-label={`${m.name} — ${k}`}
                            className="inline-grid place-items-center w-8 h-8 rounded-full
                                       ring-1 ring-black/5 dark:ring-white/10
                                       bg-zinc-100/70 dark:bg-white/5
                                       hover:bg-sky-500/10 hover:ring-sky-500/40
                                       text-zinc-600 hover:text-sky-700
                                       dark:text-zinc-400 dark:hover:text-sky-300
                                       transition-colors"
                          >
                            <Icon width={14} height={14} aria-hidden />
                          </Link>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </Section>
  );
}
