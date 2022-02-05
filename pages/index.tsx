import type { NextPage } from "next";
import { BaseLayout } from "../lib/layouts/BaseLayout";

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <div>
        <h1 className="text-3xl">Hello world!</h1>
      </div>
    </BaseLayout>
  );
};

export default Home;
