import styles from "./styles.module.css";
import { Icon } from "@mui/material";

interface Props {
  Icon: typeof Icon;
  title: string;
}

const iconStyles = {
  fontSize: "2rem",
  marginRight: "1rem",
};

function SidebarRow({ Icon, title }: Props) {
  return (
    <div className={styles["sidebar-row-container"]}>
      <Icon sx={iconStyles} />
      <p>{title}</p>
    </div>
  );
}

export default SidebarRow;
