import React from "react";
import styles from "./styles.module.css";

interface SidebarRowProps {
  Icon: React.FC<any>;
  title: string;
}

const iconStyles = {
  fontSize: "2rem",
  marginRight: "1rem",
};

function SidebarRow({ Icon, title }: SidebarRowProps) {
  return (
    <>
      <div className={styles["sidebar-row-container"]}>
        <Icon sx={iconStyles} />
        <p>{title}</p>
      </div>
    </>
  );
}

export default SidebarRow;
