import { CustomImage } from "@components/Utils/CustomImage";
import { Link } from "@components/Utils/Link";
import { PROJECTS } from "@libs/config/projects";
import { FC } from "react";

export const Project: FC = () => {
  return (
    <section className="relative py-20" id="projects">
      <div className="container mx-auto">
        <div className="text-center mb-4">
          <h1 className="text-blue-800 font-bold text-4xl">Projelerimiz</h1>
          <p className="text-gray-700 font-semibold text-medium mt-3">
            Buradaki yer alan projeler, bize ait projeler, bünyemizde yer alan
            projeler ve ortak olduğumuz projelerdir.
          </p>
        </div>

        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {PROJECTS.map((project, index) => (
              <Link
                href={project.link}
                key={index}
                className="text-black hover:text-black"
              >
                <div className="text-center bg-white shadow-lg shadow-[#d0d7db] m-[20px] p-10 flex flex-col items-center rounded-tl-3xl rounded-b-3xl rounded-tr-md group">
                  <span>
                    <CustomImage
                      className="w-36 group-hover:scale-105 duration-200 rounded-lg"
                      src={project.icon}
                      alt="Project Image"
                    />
                  </span>

                  <span className="mt-3">
                    <h1 className="font-bold text-2xl">{project.title}</h1>
                    <p className="font-semibold text-medium mt-2">
                      {project.text}
                    </p>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
