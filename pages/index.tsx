import type { NextPage } from "next";

// components
import Head from "next/head";
import Feed from "../components/Feed/Feed";
import Sidebar from "../components/Sidebar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Twitter</title>
        <meta name="description" content="Twitter" />

        {/* Favicons */}
        <link rel="icon" href="/favicons/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
      </Head>
      <main>
        <Sidebar />
        <Feed />
        {/* Widgets */}
      </main>
    </>
  );
};

export default Home;
