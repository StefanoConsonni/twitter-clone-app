"use client";

import { useQuery } from "@tanstack/react-query";
import TweetBox from "../TweetBox/TweetBox";
import Tweet from "../Tweet/Tweet";
import { ITweet } from "../../interfaces";
import styles from "./styles.module.css";
import SyncIcon from "@mui/icons-material/Sync";
import { CircularProgress } from "@mui/material";

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
      return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getTweets`).then(
        (res) => res.json()
      );
    },
  });
  console.log("data", data);

  if (isLoading) {
    return <CircularProgress />;
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
        {data.tweets.map((tweet: ITweet) => (
          <Tweet key={tweet._id} tweet={tweet} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
