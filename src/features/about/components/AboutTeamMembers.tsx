"use client";

import { AnimatedSection } from "@/components/Globals/AnimatedSection";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/libs/animations";
import { useI18n } from "@/lib/i18n";
import { Link } from "@/components/Globals/Link";
import { MEMBERS, ROLE_STYLES, SocialKey, ICONS } from "../libs/team";
import Image from "next/image";

export default function AboutTeamMembers() {
  const { t } = useI18n();

  return (
    <AnimatedSection id="team-members" className="py-8 md:py-14">
      <motion.div className="mb-6 md:mb-8" variants={fadeInUp}>
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
          {t("team.members.title")}
        </h3>
        <p className="mt-1 text-sm md:text-base opacity-70">
          {t("team.members.subtitle")}
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
      >
        {MEMBERS.map((m, i) => {
          const styles = ROLE_STYLES[m.roleTag];
          return (
            <motion.article
              key={i}
              variants={fadeInUp}
              transition={{ delay: 0.03 * i }}
              className="group rounded-2xl ring-1 ring-black/10 dark:ring-white/10
                         bg-white dark:bg-[#16181d] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`h-1 w-full ${styles.cap}`} />
              <div className="p-5 flex gap-4">
                <div className="shrink-0">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden ring-1 ring-black/10 dark:ring-white/10">
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

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="text-base md:text-lg font-semibold truncate">
                      {m.name}
                    </h4>
                    <span
                      className={`text-[10px] md:text-xs px-2 py-0.5 rounded-full ring ${styles.pill}`}
                      title="nick"
                    >
                      {m.nick}
                    </span>
                  </div>

                  <p className="text-xs md:text-sm opacity-70">
                    {t(`team.stats.${m.roleTag}`)}
                  </p>

                  <p className="mt-2 text-xs md:text-sm opacity-70 line-clamp-3">
                    {m.bio}
                  </p>

                  {m.links && Object.keys(m.links).length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {Object.entries(m.links).map(([key, url]) => {
                        const k = key as SocialKey;
                        if (!url || !(k in ICONS)) return null;
                        const Icon = ICONS[k];
                        return (
                          <Link
                            key={k}
                            href={url}
                            aria-label={`${m.name} — ${k}`}
                            className="inline-grid place-items-center w-8 h-8 rounded-full ring-1 ring-black/10 dark:ring-white/10
                                       bg-black/5 dark:bg-white/10 hover:ring-sky-400/50 hover:bg-sky-500/10
                                       focus:outline-none focus:ring-2 focus:ring-sky-500/60 transition"
                          >
                            <Icon
                              className="w-4 h-4 opacity-80"
                              aria-hidden="true"
                              focusable="false"
                            />
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </AnimatedSection>
  );
}
