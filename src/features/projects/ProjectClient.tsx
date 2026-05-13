"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import { PROJECTS } from "@/config/projects";
import { useI18n } from "@/lib/i18n";
import { ProjectsHero } from "./components/ProjectsHero";
import {
  ProjectsFiltersSection,
  type ProjectsTypeFilter,
} from "./components/ProjectsFiltersSection";
import { ProjectsGroupSection } from "./components/ProjectsGroupSection";
import { ProjectsSolutions } from "./components/ProjectsSolutions";
import { DesignShowcaseSection } from "./components/DesignShowcaseSection";
import { DesignSolutions } from "./components/DesignSolutions";
import { ProjectsMusicCta } from "./components/ProjectsMusicCta";
import { ProjectsCTA } from "./components/ProjectsCTA";

export default function ProjectClient({
  initialType,
}: {
  initialType: ProjectsTypeFilter;
}) {
  const { t } = useI18n();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [type, setType] = useState<ProjectsTypeFilter>(initialType);

  useEffect(() => {
    const current = searchParams.get("cat");
    if (current === type) return;

    const sp = new URLSearchParams(searchParams);
    sp.set("cat", type);
    router.replace(`${pathname}?${sp.toString()}`, { scroll: false });
  }, [type, pathname, router, searchParams]);

  const onSoon = useCallback(() => {
    toast.info(t("projectsPage.types.gameSoon"));
  }, [t]);

  const filtered =
    type === "all" ? PROJECTS : PROJECTS.filter((p) => p.type === type);

  const softwareProjects = PROJECTS.filter((p) => p.type === "software");

  return (
    <>
      <ProjectsHero />
      <ProjectsFiltersSection
        active={type}
        setActive={setType}
        onSoon={onSoon}
      />

      {type === "all" ? (
        <>
          <ProjectsGroupSection
            id="software-projects"
            title={t("projectsPage.groups.software")}
            projects={PROJECTS}
            hideIfEmpty
          />
          <DesignShowcaseSection max={12} />
          <ProjectsSolutions />
          <DesignSolutions />
          <ProjectsMusicCta />
        </>
      ) : null}

      {type === "software" ? (
        <>
          <ProjectsGroupSection
            id="software-projects"
            title={t("projectsPage.groups.software")}
            projects={softwareProjects.length ? softwareProjects : filtered}
            hideIfEmpty
          />
          <ProjectsSolutions />
          <ProjectsMusicCta />
        </>
      ) : null}

      {type === "design" ? (
        <>
          <DesignShowcaseSection max={12} />
          <DesignSolutions />
        </>
      ) : null}

      <ProjectsCTA />
    </>
  );
}
