import React from "react";

import classes from "./styles.module.css";

interface SidebarRowProps {
  Icon: any;
  title: string;
}

const iconStyles = {
  fontSize: "38px",
};

function SidebarRow({ Icon, title }: SidebarRowProps) {
  return (
    <>
      <div className={classes["sidebar-row-container"]}>
        <Icon sx={iconStyles} />
        <span>
          <p>{title}</p>
        </span>
      </div>
    </>
  );
}

export default SidebarRow;
