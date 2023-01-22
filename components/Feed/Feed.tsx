"use client";

import styles from "./styles.module.css";
import SyncIcon from "@mui/icons-material/Sync";
import TweetBox from "../TweetBox/TweetBox";

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
  return (
    <div className={styles["feed-container"]}>
      <div className={styles["header-container"]}>
        <h1 className={styles["feed-title"]}>Home</h1>
        <SyncIcon sx={iconStyles} />
      </div>
      <div>
        <TweetBox />
      </div>
    </div>
  );
}

export default Feed;
