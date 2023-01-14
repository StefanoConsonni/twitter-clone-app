import React from "react";

// components
import SidebarRow from "../SidebarRow/SidebarRow";

// assets
import styles from "./styles.module.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const twitterIconStyles = {
  fontSize: "2.2rem",
  color: "var(--light-blue)",
  marginLeft: "2rem",
  paddingRight: "2.8rem",
  marginTop: "0.4rem",
  cursor: "pointer",
};

function Sidebar() {
  return (
    <div className={styles["sidebar-container"]}>
      <TwitterIcon sx={twitterIconStyles} />
      <SidebarRow Icon={HomeRoundedIcon} title="Home" />
      <SidebarRow Icon={TagIcon} title="Explore" />
      <SidebarRow Icon={NotificationsNoneIcon} title="Notifications" />
      <SidebarRow Icon={MailOutlineIcon} title="Messages" />
      <SidebarRow Icon={BookmarkBorderIcon} title="Bookmarks" />
      <SidebarRow Icon={ListAltIcon} title="Lists" />
      <SidebarRow Icon={PersonOutlineIcon} title="Sign In" />
      <SidebarRow Icon={MoreHorizIcon} title="More" />
    </div>
  );
}

export default Sidebar;
