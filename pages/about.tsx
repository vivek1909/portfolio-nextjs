import type { NextPage } from "next";
import { About } from "../lib/components/About";
import { BaseLayout } from "../lib/layouts/BaseLayout";

const AboutPage: NextPage = () => {
  return (
    <BaseLayout>
      <About />
    </BaseLayout>
  );
};

export default AboutPage;
