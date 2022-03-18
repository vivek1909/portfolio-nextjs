import { NextPage } from "next";
import React from "react";
import { Projects } from "../lib/components/Projects/Projects";
import { BaseLayout } from "../lib/layouts/BaseLayout";
import { MenuItems } from "../types/menu";

const ProjectsPage: NextPage = () => {
  return (
    <BaseLayout activeMenu={MenuItems.PROJECTS}>
      <Projects />
    </BaseLayout>
  );
};

export default ProjectsPage;
