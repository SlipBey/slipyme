import { FC } from "react";
import { Link } from "@components/Utils/Link";
import { FiHeart } from "react-icons/fi";
import { CustomImage } from "@components/Utils/CustomImage";
import Icon from "@assets/icon.svg";
import { CONFIG } from "@libs/config";
import { PROJECTS } from "@libs/config/projects";

export const Footer: FC = () => {
  const OTHER = [
    {
      href: "/basvuru",
      name: "Yetkili Başvurusu",
    },
    {
      href: "/discord",
      name: "Tester Ol",
    },
    {
      href: "https://blog.slipyme.com",
      name: "Slipyme Blog",
    },
  ];

  return (
    <footer className="p-4 bg-white sm:p-6">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 lg:gap-8 pt-10 lg:pt-12 mb-16">
          <div className="col-span-full lg:col-span-2">
            <div className="lg:-mt-2 mb-4">
              <span className="inline-flex items-center text-xl md:text-2xl font-bold gap-2">
                <CustomImage
                  className="w-8 h-auto text-indigo-500"
                  src={Icon}
                  alt=""
                />
                Slipyme
              </span>
            </div>
            <p className="sm:pr-8 mb-2">
              Slipyme çeşitli sektörlerde kaliteli bir hizmet verebilmek
              amacıyla kurulmuştur. Amacımız hizmet ettiğimiz sektörlerde
              faaliyetler gösterip bu sektörleri birbirleri ile harmanlamaktır.
              Slipyme, şuanda yazılım, tasarım ve oyun sektöründe faaliyet
              göstermektedir.
            </p>
          </div>

          <div>
            <div className="text-gray-700 font-bold tracking-widest uppercase mb-4">
              Projeler
            </div>

            <nav className="flex flex-col gap-4">
              {PROJECTS.map((project, index) => (
                <div key={index}>
                  <Link
                    href={project.link}
                    className="text-gray-800 hover:text-sky-600 transition duration-100"
                  >
                    {project.title}
                  </Link>
                </div>
              ))}
            </nav>
          </div>

          <div>
            <div className="text-gray-700 font-bold tracking-widest uppercase mb-4">
              Diğer
            </div>

            <nav className="flex flex-col gap-4">
              {OTHER.map((project, index) => (
                <div key={index}>
                  <Link
                    href={project.href}
                    className="text-gray-800 hover:text-sky-600 transition duration-100"
                  >
                    {project.name}
                  </Link>
                </div>
              ))}
            </nav>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-medium text-gray-800 sm:text-center">
            &copy; {new Date().getFullYear()} All rights reserved. Made with{" "}
            <FiHeart className="inline text-red-600" /> by{" "}
            <Link
              className="text-blue-600 hover:text-blue-500"
              href="https://slip.slipyme.com"
            >
              SlipBey
            </Link>
            .
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            {CONFIG.CONTACT.map((social, index) => (
              <Link
                href={social.href}
                className="text-gray-500 hover:text-gray-900"
                key={index}
              >
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
