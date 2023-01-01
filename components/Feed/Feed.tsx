import React from "react";
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
};

function Feed() {
  return (
    <div>
      <h1>Home</h1>
      <SyncIcon sx={iconStyles} />
    </div>
  );
}

export default Feed;
