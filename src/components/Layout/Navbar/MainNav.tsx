import { Link } from "@/components/Globals/Link";
import { PAGES } from "@/libs/config/pages";
import MainNavClient from "./MainNavClient";
import ContactButton from "./ContactButton";
import Image from "next/image";

async function MainNav() {
  return (
    <nav className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-4xl xl:max-w-7xl px-4 lg:px-0 h-14 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/resimler/logo.png"
            alt="Slipyme Logo"
            width={45}
            height={45}
            priority
            sizes="45px"
            className="w-9 h-9 rounded-full ring-1 ring-black/5 dark:ring-white/10"
          />
          <div className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100">
            Slipyme Company
          </div>
        </Link>

        <MainNavClient pages={PAGES} />

        <ContactButton />
      </div>
    </nav>
  );
}

export default MainNav;
