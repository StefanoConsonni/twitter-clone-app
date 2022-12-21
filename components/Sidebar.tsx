import React from "react";

// components
import Image from "next/image";
import SidebarRow from "./SidebarRow";

// assets
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import twitterLogo from "../public/img/twitter-logo.png";

function Sidebar() {
  return (
    <>
      <Image src={twitterLogo} alt="logo of Twitter" width={55} />
      <SidebarRow Icon={HomeRoundedIcon} title="Home" />
    </>
  );
}

export default Sidebar;
