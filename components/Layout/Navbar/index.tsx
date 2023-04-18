import { FC, useEffect, useState } from "react";
import { Link } from "@components/Utils/Link";
import { IoIosArrowUp } from "react-icons/io";
import { useRouter } from "next/router";
import { GiHamburgerMenu } from "react-icons/gi";
import { CustomImage } from "@components/Utils/CustomImage";
import classNames from "classnames";
import icon from "@assets/icon.svg";
import { CONFIG } from "@libs/config";
import { Modal } from "@components/Utils/Modal";
import { Button } from "@components/Utils/Button";

export const Navbar: FC = () => {
  const router = useRouter();
  const [top, setTop] = useState(false);
  const [hash, setHash] = useState(false);

  const PAGES = [
    {
      name: "Anasayfa",
      link: "/",
    },
    {
      name: "Hakkımızda",
      link: "/#about",
    },
    {
      name: "Hizmetlerimiz",
      link: "/#services",
    },
    {
      name: "Projelerimiz",
      link: "/#projects",
    },
    {
      name: "İletişim",
      link: "/#contact",
    },
  ];

  useEffect(() => {
    window.onscroll = function () {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      )
        setTop(true);
      else setTop(false);
    };
  }, []);

  const onUp = () => {
    window.location.href = "#";
  };

  const onClose = () => {
    setHash(!hash);
  };

  return (
    <header className="fixed w-full z-10">
      <nav
        className={classNames(
          "px-4 lg:px-6 py-2.5 duration-300 border-b border-gray-200",
          {
            "bg-white border-gray-200": top,
            "bg-white lg:bg-transparent lg:border-transparent": !top,
          }
        )}
      >
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="#" className="flex items-center">
            <CustomImage
              src={icon}
              className="mr-3 h-6 sm:h-9 rounded-md"
              alt="Navbar Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              Slipyme
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            <Button type="primary" onClick={() => router.push("/discord")}>
              Ürünlerimiz
            </Button>
            <button
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden bg-gray-100 hover:bg-gray-200 focus:outline-none ring-2 ring-gray-200 duration-100"
              onClick={onClose}
            >
              <GiHamburgerMenu className="w-5 h-5" />
            </button>
          </div>
          <div
            className={classNames(
              "justify-between items-center w-full lg:flex lg:w-auto lg:order-1",
              { hidden: !hash }
            )}
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {PAGES.map((nav, index) => (
                <li key={index} className="group">
                  <Link
                    href={nav.link}
                    className={classNames(
                      "block py-2 pr-4 pl-3 lg:p-0 duration-500 text-black hover:underline underline-offset-8",
                      {
                        underline: router.asPath == nav.link,
                      }
                    )}
                  >
                    {nav.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <button
        aria-label="Go Up"
        onClick={onUp}
        className={classNames(
          "bg-white border-2 border-blue-700 text-center fixed bottom-5 h-12 w-12 right-5 duration-500 rounded-full z-50 group",
          "hover:bg-blue-600 hover:border-blue-600",
          {
            block: top,
            hidden: !top,
          }
        )}
      >
        <IoIosArrowUp className="h-full w-full p-2 text-blue-700 group-hover:text-white" />
      </button>
    </header>
  );
};
