"use client";

import Image from "next/image";
import { Link } from "@/components/ui/Link";
import { SOCIAL_LINKS } from "@/config/social";

type EmailItem = { label: string; email: string };

export function ContactSidebar({ emails }: { emails: EmailItem[] }) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 h-full">
      <Image
        src="/resimler/cikartmalar/contact.png"
        alt=""
        width={256}
        height={144}
        loading="lazy"
        sizes="(min-width:640px) 256px, 200px"
        className="h-32 w-auto drop-shadow-xl"
      />

      <div className="space-y-2 text-center sm:text-left">
        {emails.map((m) => (
          <div key={m.email} className="text-sm">
            <span className="mr-2 text-zinc-500 dark:text-zinc-400">
              {m.label}:
            </span>
            <Link
              className="font-semibold text-sky-700 hover:text-sky-800
                         dark:text-sky-300 dark:hover:text-sky-200 transition-colors"
              href={`mailto:${m.email}`}
            >
              {m.email}
            </Link>
          </div>
        ))}
      </div>

      <div className="w-full flex flex-wrap items-center justify-center gap-3">
        {SOCIAL_LINKS.map((s) => {
          const Icon = s.icon;
          return (
            <Link
              key={s.label}
              href={s.href}
              blank
              aria-label={`Slipyme ${s.label}`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full
                         bg-zinc-100/70 hover:bg-sky-50
                         dark:bg-white/5 dark:hover:bg-sky-500/10
                         text-zinc-600 hover:text-sky-700
                         dark:text-zinc-400 dark:hover:text-sky-300
                         ring-1 ring-black/5 dark:ring-white/10 transition-colors"
            >
              <Icon size={18} aria-hidden />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
