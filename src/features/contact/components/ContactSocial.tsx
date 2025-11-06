"use client";

import Image from "next/image";
import { Link } from "@/components/Globals/Link";
import { SOCIAL } from "@/libs/config/social";

type EmailItem = { label: string; email: string };

export default function ContactSocial({ emails }: { emails: EmailItem[] }) {
  return (
    <div className="p-6 sm:p-8 flex flex-col items-center justify-center gap-5 h-full">
      <div className="flex items-center justify-center">
        <Image
          src="/resimler/cikartmalar/contact.png"
          alt=""
          width={256}
          height={144}
          loading="lazy"
          sizes="(min-width:640px) 256px, 200px"
          className="h-36 w-auto"
        />
      </div>

      <div className="space-y-2">
        {emails.map((m, i) => (
          <div key={i} className="text-sm">
            <span className="mr-2 text-zinc-500 dark:text-zinc-400">
              {m.label}:
            </span>
            <Link
              className="font-semibold text-sky-600 hover:text-sky-700"
              href={`mailto:${m.email}`}
            >
              {m.email}
            </Link>
          </div>
        ))}
      </div>

      <div className="w-full flex flex-wrap items-center justify-center gap-4">
        {SOCIAL.map((s, idx) => (
          <Link href={s.href} key={idx} blank aria-label={`Slipyme ${s.alt}`}>
            <s.icon
              className="block align-middle w-7 h-7 text-sky-600 hover:text-sky-700 transition-colors"
              aria-hidden="true"
              focusable="false"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
