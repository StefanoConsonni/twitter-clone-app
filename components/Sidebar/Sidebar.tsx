import React from "react";

// components
import Image from "next/image";
import SidebarRow from "../SidebarRow/SidebarRow";

// assets
import styles from "./styles.module.css";
import twitterLogo from "../../public/img/twitter-logo.png";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Sidebar() {
  return (
    <div className={styles["sidebar-container"]}>
      <Image
        src={twitterLogo}
        alt="logo of Twitter"
        width={50}
        style={{ marginLeft: "1.5rem", cursor: "pointer" }}
      />
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
