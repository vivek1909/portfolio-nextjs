import type { NextPage } from "next";
import { About } from "../lib/components/About";
import { BaseLayout } from "../lib/layouts/BaseLayout";
import { MenuItems } from "../types/menu";

const AboutPage: NextPage = () => {
  return (
    <BaseLayout activeMenu={MenuItems.ABOUT}>
      <About />
    </BaseLayout>
  );
};

export default AboutPage;
