import React from "react";
import styles from "./styles.module.css";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "10",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "22.5rem",
  marginLeft: "-0.5rem",
  marginTop: "0.4rem",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
    background: "var(--grey-1)",
    borderRadius: "50px",
  },
}));

const searchIconStyles = {
  color: "var(--grey-2)",
  marginLeft: "-0.6rem",
  marginTop: "0.4rem",
};

function Widgets() {
  return (
    <div className={styles["widgets-container"]}>
      <div className={styles["searchbox-container"]}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon sx={searchIconStyles} />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search Twitter"
            inputProps={{ "aria-label": "search Twitter" }}
          />
        </Search>
      </div>

      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="rauchg"
        options={{ height: 610 }}
      />
    </div>
  );
}

export default Widgets;
