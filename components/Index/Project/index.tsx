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
          <p className="text-gray-700 font-semibold text-lg mt-3">
            Slipyme'e ait yada Slipyme'nin adı altında açılmış/kurulmuş olan
            projeler.
          </p>
        </div>

        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PROJECTS.map((project, index) => (
              <Link
                href={project.link}
                key={index}
                className="shadow-xl rounded-xl border-2 hover:shadow-2xl duration-300"
              >
                <div className="flex flex-col items-center justify-center text-center gap-2 p-5">
                  <CustomImage
                    className="w-36 h-36 rounded-lg"
                    src={project.icon}
                    alt="Project Image"
                  />

                  <h1 className="font-bold text-2xl text-black">
                    {project.title}
                  </h1>
                  <p className="font-semibold text-lg text-gray-800">
                    {project.text}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
