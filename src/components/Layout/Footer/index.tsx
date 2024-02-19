/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link } from "@/components/Globals/Link";
import type { FC } from "react";
import { FiHeart } from "react-icons/fi";
import icon from "@/assets/icon.svg";
import { CustomImage } from "@/components/Globals/CustomImage";
import { FOOTER } from "@/libs/config/pages";

export const Footer: FC = () => (
  <footer className="bg-blue-900 relative mt-12 w-full px-8">
    <div className="flex flex-col justify-center items-center">
      <div className="absolute -top-12">
        <CustomImage
          src={icon}
          alt="footer_icon"
          className="w-24 rounded-full"
        />
      </div>
      <div className="mt-12 sm:text-3xl font-semibold">Slipyme Company</div>
    </div>
    <div className="flex flex-wrap gap-5 justify-center sm:justify-between mb-3 px-24 py-8">
      {FOOTER.map((a, idx) => (
        <div className="flex flex-col text-center gap-2" key={idx}>
          {a.map((b, idx) => (
            <Link
              href={b.href}
              key={idx}
              className="hover:text-gray-300 duration-300"
            >
              {b.text}
            </Link>
          ))}
        </div>
      ))}
    </div>
    <div className="h-[1px] w-full bg-gray-700 rounded-full" />
    <div className="py-5 px-3 text-center text-white text-sm">
      &copy; {new Date().getFullYear()} All rights reserved. Made with{" "}
      <FiHeart className="text-red-500 inline" /> by{" "}
      <Link href="https://slip.slipyme.com" className="text-blue-500">
        SlipBey
      </Link>{" "}
      using{" "}
      <Link href="https://nextjs.org/" className="text-gray-500">
        NextJS
      </Link>{" "}
      and{" "}
      <Link href="https://tailwindcss.com/" className="text-green-500">
        TailwindCSS
      </Link>
    </div>
  </footer>
);
