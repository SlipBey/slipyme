import { ProjectPage } from "@/components/Globals/Project";
import { ICardProps, PROJECTS } from "@/libs/config/projects";
import { useLocaleParser } from "@/libs/localeParser";
import { useState } from "react";

export const HomeProjects: React.FC = () => {
  const parser = useLocaleParser();

  const [selected, setSelected] = useState<number>(0);

  const [project, setProject] = useState<ICardProps>();

  return (
    <ProjectPage
      title={parser.get("projects")}
      name={parser.get("wwd")}
      id="projects"
      selected={selected}
      setSelected={setSelected}
      projects={PROJECTS}
      project={project}
      setProject={setProject}
    />
  );
};
