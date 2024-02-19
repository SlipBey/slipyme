import { Section } from "@/components/Layout/Section";
import { FaArrowRight } from "react-icons/fa";
import { Modal } from "../Modal";
import classNames from "classnames";
import { ICardProps } from "@/libs/config/projects";

interface IProjectPageProps {
  title: string;
  name: string;
  id: string;
  selected: number;
  setSelected: (selected: number) => void;
  projects: ICardProps[];
  project: ICardProps | undefined;
  setProject: (project: ICardProps | undefined) => void;
}

export const ProjectPage: React.FC<IProjectPageProps> = ({
  title,
  name,
  id,
  selected,
  setSelected,
  projects,
  project,
  setProject,
}) => {
  return (
    <Section title={title} name={name} id={id}>
      <div className="flex flex-col md:flex-row gap-5 my-8">
        {projects.map((project, idx) => (
          <button
            onClick={() => setSelected(project.id)}
            className={classNames(
              "p-8 h-28 md:w-48 rounded-lg border hover:border-blue-600 duration-300",
              {
                "shadow-md shadow-blue-600 border-blue-600":
                  selected == project.id,
                "border-gray-700": selected != project.id,
              },
            )}
            key={idx}
          >
            <span className="text-lg font-lg">{project.title}</span>
          </button>
        ))}
      </div>
      {projects
        .filter((project) => project.id == selected)
        .map((project, idx) => (
          <div
            key={idx}
            className="rounded-lg border border-gray-700 bg-blue-700 p-8 text-left"
          >
            <h1 className="text-lg font-lg">{project.title}</h1>
            <p className="text-base text-gray-300">{project.description}</p>
            <button
              className="items-center justify-end flex text-blue-600 gap-2"
              onClick={() =>
                setProject({
                  id: project.id,
                  title: project.title,
                  description: project.description,
                  url: { link: project.url.link, github: project.url.github },
                })
              }
            >
              Details <FaArrowRight />
            </button>
          </div>
        ))}

      {project && <Modal data={project} setData={setProject} />}
    </Section>
  );
};
