import type { NextPage } from "next";
import { Home } from "../lib/containers/Home/Home";
import { BaseLayout } from "../lib/layouts/BaseLayout";

const HomePage: NextPage = () => {
  return (
    <BaseLayout isHomePage>
      <Home />
    </BaseLayout>
  );
};

export default HomePage;
