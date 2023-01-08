import React from "react";
import styles from "./styles.module.css";
import SyncIcon from "@mui/icons-material/Sync";

const iconStyles = {
  color: "var(--light-blue)",
  fontSize: "2rem",
  cursor: "pointer",
  transition: "all 0.5s ease-out",
  "&:hover": {
    transform: "rotate(180deg)",
  },
  "&:active": {
    transform: "scale(1.25)",
  },
  marginTop: "2rem",
};

function Feed() {
  return (
    <div className={styles["feed-title-container"]}>
      <h1 className={styles["feed-title"]}>Home</h1>
      <SyncIcon sx={iconStyles} />
    </div>
  );
}

export default Feed;
