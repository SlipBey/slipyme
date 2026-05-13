import Image from "next/image";
import { Link } from "@/components/ui/Link";
import { PRIMARY_NAV } from "@/config/navigation";
import { MainNavClient } from "./MainNavClient";
import { ContactCTA } from "./ContactCTA";

export function MainNav() {
  return (
    <nav
      className="bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl
                 border-b border-black/5 dark:border-white/10"
    >
      <div className="mx-auto max-w-4xl xl:max-w-7xl px-4 lg:px-0 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="relative">
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-1 rounded-full
                         bg-linear-to-br from-sky-400/40 to-cyan-500/40 blur-md
                         opacity-0 group-hover:opacity-100 transition-opacity"
            />
            <Image
              src="/resimler/logo.png"
              alt="Slipyme Company"
              width={40}
              height={40}
              priority
              sizes="40px"
              className="relative w-10 h-10 rounded-full ring-1 ring-black/10 dark:ring-white/15"
            />
          </span>
          <span className="text-base sm:text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Slipyme Company
          </span>
        </Link>

        <MainNavClient pages={PRIMARY_NAV} />
        <ContactCTA />
      </div>
    </nav>
  );
}
