"use client";

import type { NextPage } from "next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import styles from "./styles.module.css";

// components
import Feed from "../components/Feed/Feed";
import Sidebar from "../components/Sidebar/Sidebar";
import Widgets from "../components/Widgets/Widgets";

const Home: NextPage = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles["home-container"]}>
        <main>
          <Sidebar />
          <Feed />
          <Widgets />
        </main>
      </div>
    </QueryClientProvider>
  );
};

export default Home;
