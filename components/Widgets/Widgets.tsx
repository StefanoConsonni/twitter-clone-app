import React from "react";
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
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
    background: "var(--grey-1)",
    borderRadius: "50px",
  },
}));

const iconStyles = {
  color: "var(--grey-2)",
};

function Widgets() {
  return (
    <div>
      <Search>
        <SearchIconWrapper>
          <SearchIcon sx={iconStyles} />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search Twitter"
          inputProps={{ "aria-label": "search Twitter" }}
        />
      </Search>

      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="steven_cons"
        options={{ height: 1000 }}
      />
    </div>
  );
}

export default Widgets;
