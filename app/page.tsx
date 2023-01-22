"use client";

// import { previewData } from "next/headers";
import { groq } from "next-sanity";
import type { NextPage } from "next";
import styles from "./styles.module.css";

// components
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
      <main>
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </div>
  );
};

export default Home;
