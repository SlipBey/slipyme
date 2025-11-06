"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PROJECTS, type Project } from "@/libs/config/projects";
import { useI18n } from "@/lib/i18n";
import ProjectsHero from "./components/ProjectsHero";
import DesignShowcaseSection from "./components/DesignShowcaseSection";
import DesignSolutions from "./components/DesignSolutions";
import ProjectsCTA from "./components/ProjectsCTA";
import ProjectsFiltersSection from "./components/ProjectsFiltersSection";
import ProjectsGroupSection from "./components/ProjectsGroupSection";
import ProjectsSolutions from "./components/ProjectsSolutions";
import { toast } from "react-toastify";

export type TypeFilter = "all" | "software" | "design";

export default function ProjectPageClient({
  initialType,
}: {
  initialType: TypeFilter;
}) {
  const { t } = useI18n();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [type, setType] = useState<TypeFilter>(initialType);

  useEffect(() => {
    const current = searchParams.get("cat");
    if (current === type) return;
    const sp = new URLSearchParams(searchParams);
    sp.set("cat", type);
    router.replace(`${pathname}?${sp.toString()}`, { scroll: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  const onSoon = useCallback(() => {
    toast.info(t("projectsPage.types.gameSoon"));
  }, []);

  return (
    <>
      <ProjectsHero />

      <ProjectsFiltersSection
        active={type}
        setActive={setType}
        onSoon={onSoon}
      />

      {type === "all" && (
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
        </>
      )}

      {type === "software" && (
        <>
          <ProjectsGroupSection
            id="software-projects"
            title={t("projectsPage.groups.software")}
            projects={PROJECTS}
            hideIfEmpty
          />
          <ProjectsSolutions />
        </>
      )}

      {type === "design" && (
        <>
          <DesignShowcaseSection max={12} />
          <DesignSolutions />
        </>
      )}

      <ProjectsCTA />
    </>
  );
}
