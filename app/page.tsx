"use client";

// import { previewData } from "next/headers";
import { groq } from "next-sanity";
import type { NextPage } from "next";
import styles from "./styles.module.css";

// components
import Head from "next/head";
import Feed from "../components/Feed/Feed";
import Sidebar from "../components/Sidebar/Sidebar";
import Widgets from "../components/Widgets/Widgets";

const query = groq`
*[_type=='tweet']{
  ...,
  'age': 45
}
`;

const Home: NextPage = () => {
  // if (previewData()) {
  //   return (
  //     <div>
  //       <h1>Preview Mode</h1>
  //     </div>
  //   );
  // }

  return (
    <div className={styles["home-container"]}>
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
        <Widgets />
      </main>
    </div>
  );
};

export default Home;
