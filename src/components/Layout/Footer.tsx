"use client";

import { FC } from "react";
import { Link } from "@/components/Globals/Link";
import Image from "next/image";
import { FOOTER_PAGES } from "@/libs/config/pages";
import instance from "@/libs/api";
import { toast } from "react-toastify";
import { useI18n } from "@/lib/i18n";

const Footer: FC = () => {
  const { t } = useI18n();

  return (
    <footer className="relative mt-10 w-full text-black dark:text-gray-100 px-4 md:px-12 lg:px-0">
      <div className="max-w-4xl xl:max-w-7xl mx-auto px-6 md:px-8 py-10 rounded-2xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <div>
              <Image
                src="/resimler/slipyme-yazi-siyah.png"
                alt="Slipyme"
                width={160}
                height={40}
                loading="lazy"
                sizes="160px"
                className="w-40 dark:hidden"
              />
              <Image
                src="/resimler/slipyme-yazi.png"
                alt="Slipyme"
                width={160}
                height={40}
                loading="lazy"
                sizes="160px"
                className="w-40 hidden dark:block"
              />
            </div>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {t("footer.desc")}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {FOOTER_PAGES.map((group, i) => (
              <div key={i}>
                <h3 className="text-base font-semibold mb-3">
                  {t(group.title)}
                </h3>
                <ul className="space-y-2">
                  {group.pages.map((p, k) => (
                    <li key={k}>
                      <Link
                        href={p.href}
                        className="text-sm text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                      >
                        {t(p.name)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2" id="mail">
            <h3 className="text-base font-semibold">
              {t("footer.newsletter.title")}
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              {t("footer.newsletter.desc")}
            </p>

            <form
              className="mt-2 flex flex-col lg:flex-row gap-3"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const formData = new FormData(form);
                const email = String(formData.get("email") ?? "").trim();
                if (!email) return;
                try {
                  const res = await instance.post("/api/mail", {
                    email,
                    addTime: new Date().toISOString(),
                  });
                  toast.success(res?.data?.message);
                  form.reset();
                } catch (err: any) {
                  toast.error(err?.response?.data?.error);
                }
              }}
            >
              <input
                placeholder={t("footer.newsletter.placeholder")}
                name="email"
                type="email"
                required
                className="border border-sky-400 dark:border-sky-700 rounded-lg p-2 bg-transparent text-black dark:text-white w-full"
              />
              <button
                type="submit"
                className="bg-sky-700 hover:bg-sky-800 text-white rounded-lg text-nowrap p-2 w-1/3
             focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
             focus-visible:ring-sky-400 focus-visible:ring-offset-zinc-900"
              >
                {t("contact.button")}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-black/10 dark:border-white/10 mt-6">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 text-center text-xs sm:text-sm text-slate-600 dark:text-slate-300">
          <Link
            href="/github"
            className="font-semibold hover:text-sky-600 dark:hover:text-sky-400"
          >
            {t("footer.legal.copyright")}
          </Link>{" "}
          © {new Date().getFullYear()} — All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
