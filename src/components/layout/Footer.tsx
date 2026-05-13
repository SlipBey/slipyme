"use client";

import { type FormEvent } from "react";
import Image from "next/image";
import { Link } from "@/components/ui/Link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FOOTER_GROUPS } from "@/config/navigation";
import { SOCIAL_LINKS } from "@/config/social";
import { useI18n } from "@/lib/i18n";
import api from "@/lib/api";
import { toast } from "react-toastify";
import { FiArrowRight } from "react-icons/fi";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  async function handleSubscribe(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "").trim();

    if (!email) return;

    try {
      const res = await api.post("/api/mail", {
        email,
        addTime: new Date().toISOString(),
      });

      toast.success(res?.data?.message ?? t("footer.newsletter.success"));
      form.reset();
    } catch (err: unknown) {
      const message =
        (err as { response?: { data?: { error?: string } } })?.response?.data
          ?.error ?? t("footer.newsletter.error");

      toast.error(message);
    }
  }

  return (
    <footer className="relative mt-16 mb-24 w-full px-4 text-zinc-900 dark:text-zinc-100 sm:mb-10 lg:px-0">
      <Container size="xl" className="px-0!">
        <div className="footer-glass rounded-4xl p-6 shadow-xl ring-1 ring-black/5 dark:ring-white/10 sm:p-8 md:p-10">
          <div className="grid grid-cols-1 gap-9 lg:grid-cols-[1.15fr_.85fr_1fr] lg:gap-12">
            <div className="flex flex-col">
              <div className="space-y-5">
                <Link href="/" className="inline-flex items-center gap-3">
                  <Image
                    src="/resimler/logo.png"
                    alt={t("brand.name")}
                    width={44}
                    height={44}
                    loading="lazy"
                    sizes="44px"
                    className="rounded-full ring-1 ring-black/10 dark:ring-white/15"
                  />

                  <span className="text-lg font-black tracking-tight">
                    {t("brand.name")}
                  </span>
                </Link>

                <p className="typo-body max-w-sm">{t("footer.desc")}</p>

                <div className="flex flex-wrap gap-2">
                  {SOCIAL_LINKS.map((s) => {
                    const Icon = s.icon;

                    return (
                      <Link
                        key={s.label}
                        href={s.href}
                        aria-label={t("footer.socialAria", {
                          label: s.label,
                        })}
                        className="footer-social-link"
                      >
                        <Icon size={16} aria-hidden />
                      </Link>
                    );
                  })}
                </div>
              </div>

              <p className="mt-7 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                <span className="font-semibold text-zinc-700 dark:text-zinc-300">
                  {t("brand.name")}
                </span>{" "}
                © {year} — {t("footer.rights")}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:gap-9">
              {FOOTER_GROUPS.map((group) => (
                <nav key={group.title} aria-label={t(group.title)}>
                  <h3 className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-sky-700 dark:text-sky-300">
                    {t(group.title)}
                  </h3>

                  <ul className="space-y-2.5">
                    {group.items.map((p) => (
                      <li key={`${group.title}-${p.href}`}>
                        <Link href={p.href} className="footer-link">
                          {t(p.label)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>

            <div
              id="mail"
              className="rounded-3xl border border-sky-400/15 bg-white/35 p-5 backdrop-blur-xl dark:bg-white/[0.035] sm:p-6"
            >
              <h3 className="text-xs font-black uppercase tracking-[0.18em] text-sky-700 dark:text-sky-300">
                {t("footer.newsletter.title")}
              </h3>

              <p className="typo-body mt-3">{t("footer.newsletter.desc")}</p>

              <form
                onSubmit={handleSubscribe}
                className="mt-5 grid gap-2 sm:grid-cols-[1fr_auto]"
              >
                <input
                  name="email"
                  type="email"
                  required
                  placeholder={t("footer.newsletter.placeholder")}
                  className="h-12! p-3! text-sm!"
                  aria-label={t("footer.newsletter.placeholder")}
                />

                <Button
                  type="submit"
                  size="md"
                  icon={FiArrowRight}
                  iconPosition="right"
                  className="h-12! shrink-0"
                >
                  {t("footer.newsletter.button")}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
