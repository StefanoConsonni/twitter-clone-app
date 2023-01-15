import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";

// assets
import avatarPic from "../../public/img/avatar.jpeg";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const iconStyles = {
  fontSize: "1.4rem",
  marginRight: "0.6rem",
  cursor: "pointer",
};

function TweetBox() {
  return (
    <>
      <div className={styles["tweetbox-container"]}>
        <Image
          src={avatarPic}
          alt="avatar picture"
          width={50}
          style={{ borderRadius: "100%", objectFit: "cover" }}
        />

        <div className={styles["tweetbox-form-container"]}>
          <form className={styles["tweetbox-form"]}>
            <input type="text" placeholder="What's happening?" />
            <div className={styles["tweetbox-icons-button-container"]}>
              <div className={styles["tweetbox-icons-container"]}>
                <CropOriginalIcon sx={iconStyles} />
                <ManageSearchIcon sx={iconStyles} />
                <SentimentSatisfiedAltIcon sx={iconStyles} />
                <InsertInvitationIcon sx={iconStyles} />
                <LocationOnIcon sx={iconStyles} />
              </div>
              <button className={styles["tweetbox-button"]}>Tweet</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default TweetBox;
