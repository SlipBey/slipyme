/* eslint-disable @typescript-eslint/no-explicit-any */

import { ICardProps } from "@/libs/config/projects";
import { Link } from "../Link";
import { FiGithub, FiLink, FiX } from "react-icons/fi";

interface IModal {
  data: ICardProps;
  setData: (data: any) => void;
}

export const Modal: React.FC<IModal> = ({ data, setData }) => {
  return (
    <div
      className="fixed left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-gray-900/70 px-4 py-5"
      style={{ zIndex: "100" }}
    >
      <div className="max-h-full w-full max-w-[570px] overflow-y-auto rounded-[20px] bg-blue-900 px-8 py-12 text-center md:px-[50px] md:py-[40px]">
        <div className="text-3xl font-semibold">{data.title}</div>
        <div className="mt-3">{data.description}</div>
        <div className="mt-5 flex flex-wrap gap-2 justify-center">
          {data.url.link && (
            <Link
              href={data.url.link}
              className="py-2 px-5 bg-green-600 rounded-lg hover:bg-green-700 duration-200 inline-flex items-center gap-2"
            >
              <FiLink className="text-xl" />
              Bağlantı
            </Link>
          )}
          {data.url.github && (
            <Link
              href={data.url.github}
              className="py-2 px-5 bg-gray-600 rounded-lg hover:bg-gray-700 duration-200 inline-flex items-center gap-2"
            >
              <FiGithub className="text-xl" />
              Github
            </Link>
          )}
          <button
            onClick={() => setData(undefined)}
            className="py-2 px-5 bg-red-600 rounded-lg hover:bg-red-700 duration-200 inline-flex items-center gap-2"
          >
            <FiX className="text-xl" />
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
};
