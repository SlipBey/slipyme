import Image from "next/image";
import { Link } from "@/components/Globals/Link";

export function CtaPanel({
  title,
  body,
  href,
  imgSrc,
  imgAlt,
  rightDecor,
}: {
  title: string;
  body: string;
  href: string;
  imgSrc: string;
  imgAlt: string;
  rightDecor?: React.ReactNode;
}) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl ring-1 ring-black/5 dark:ring-white/10
                 bg-linear-to-r from-sky-600 to-blue-600 px-6 sm:px-8 lg:px-12 py-8
                 grid grid-cols-1 md:grid-cols-[1.25fr_0.75fr] gap-6 items-center"
    >
      <div className="absolute inset-x-6 top-0 h-1 rounded-b-full bg-white/20" />

      <div className="md:pr-4">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="text-white/90 mt-1 text-sm md:text-base">{body}</p>

        <Link
          href={href}
          className="mt-4 inline-flex items-center rounded-xl bg-white text-sky-700
                     px-4 py-2 font-semibold ring-1 ring-white/60 hover:bg-white/90"
        >
          Daha Fazla
        </Link>
      </div>

      <div className="relative flex items-center justify-center md:justify-end">
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={128}
          height={128}
          loading="lazy"
          sizes="(min-width:768px) 128px, (min-width:640px) 112px, 96px"
          className="w-24 sm:w-28 md:w-32 drop-shadow-md rounded-xl"
        />
        {rightDecor}
      </div>
    </div>
  );
}
