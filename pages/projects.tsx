import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { Projects } from "../lib/components/Projects/Projects";
import { BaseLayout } from "../lib/layouts/BaseLayout";
import { MenuItems } from "../types/menu";

const ProjectsPage: NextPage = () => {
  return (
    <BaseLayout activeMenu={MenuItems.PROJECTS}>
      <Head>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <title>Vivek Mittal | Projects</title>
        <meta
          content={"All the projects done by Vivek Mittal"}
          name="description"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={"All Projects"} />
        <meta
          property="og:description"
          content={"All the projects done by Vivek Mittal"}
        />
        <meta property="og:title" content={"Vivek Mittal | Projects"} />
        <meta property="og:image" content={`/images/vivek.jpeg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={"Vivek Mittal | Projects"} />
        <meta
          name="twitter:description"
          content={"All the projects done by Vivek Mittal"}
        />
      </Head>
      <Projects />
    </BaseLayout>
  );
};

export default ProjectsPage;
