import type { NextPage } from "next";
import Head from "next/head";
import { Home } from "../lib/containers/Home/Home";
import { BaseLayout } from "../lib/layouts/BaseLayout";

const HomePage: NextPage = () => {
  return (
    <BaseLayout isHomePage>
      <Head>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <title>Vivek Mittal | Software Engineer</title>
        <meta
          content={
            "Vivek Mittal is a Sr. Frontend Engineer currently working at Artisan AI with 3 years of experience in building scalable and reliable frontend web applications."
          }
          name="description"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={"Vivek Mittal"} />
        <meta
          property="og:description"
          content={
            "Vivek Mittal is a Sr. Frontend Engineer currently working at Artisan AI with 3 years of experience in building scalable and reliable frontend web applications."
          }
        />
        <meta
          property="og:title"
          content={"Vivek Mittal | Software Engineer"}
        />
        <meta property="og:image" content={`/images/logo.svg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={"Vivek Mittal | Software Engineer"}
        />
        <meta
          name="twitter:description"
          content={
            "Vivek Mittal is a Sr. Frontend Engineer currently working at Artisan AI with 3 years of experience in building scalable and reliable frontend web applications."
          }
        />
      </Head>
      <Home />
    </BaseLayout>
  );
};

export default HomePage;
