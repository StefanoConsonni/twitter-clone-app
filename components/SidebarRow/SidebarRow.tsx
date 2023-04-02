import styles from "./styles.module.css";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface Props {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
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
