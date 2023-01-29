"use client";

import { useQuery } from "@tanstack/react-query";
import { default as axios, AxiosResponse } from "axios";

import styles from "./styles.module.css";
import SyncIcon from "@mui/icons-material/Sync";
import TweetBox from "../TweetBox/TweetBox";
import Tweet from "../Tweet/Tweet";
import { ITweet } from "../../interfaces";

const iconStyles = {
  color: "var(--light-blue)",
  fontSize: "2rem",
  cursor: "pointer",
  marginTop: "2.7rem",
  marginRight: "0.8rem",
  transition: "all 0.5s ease-out",
  "&:hover": {
    transform: "rotate(180deg)",
  },
  "&:active": {
    transform: "scale(1.25)",
  },
};

function Feed() {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["tweets"],
    queryFn: () => {
      return axios
        .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getTweets`)
        .then((res: AxiosResponse) => res.data);
    },
  });
  console.log(data);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <div className={styles["feed-container"]}>
      <div className={styles["header-container"]}>
        <h1 className={styles["feed-title"]}>Home</h1>
        <SyncIcon sx={iconStyles} onClick={() => refetch()} />
      </div>
      <div>
        <TweetBox />
      </div>

      {/* Feed */}
      <div>
        {data.map((tweet: ITweet) => (
          <Tweet key={tweet._id} tweet={tweet} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
