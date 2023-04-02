import Image from "next/image";
import TimeAgo from "react-timeago";
import { ITweet } from "../../interfaces";
import urlFor from "../../utils/functions/urlFor";

import styles from "./styles.module.css";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RepeatIcon from "@mui/icons-material/Repeat";
import IosShareIcon from "@mui/icons-material/IosShare";

const iconStyles = {
  fontSize: "1.3rem",
  cursor: "pointer",
  transitionProperty: "transform",
  transitionDuration: "150ms",
  transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
  "&:hover": {
    transform: "scale(1.25)",
  },
  "&:active": {
    transform: "scale(1.25)",
  },
};

interface Props {
  tweet: ITweet;
}

function Tweet({ tweet }: Props) {
  return (
    <div className={styles["container-tweet"]}>
      <div className={styles["container-tweet-header"]}>
        <Image
          src={urlFor(tweet.profileImg).url()}
          alt={"profile picture of" + tweet.username}
          className={styles["profile-img"]}
          width={50}
          height={50}
        />
        <div>
          <div className={styles["tweet-infos"]}>
            <p className={styles["tweet-user"]}>{tweet.username}</p>
            <p className={styles["tweet-alias"]}>
              @{tweet.username.replace(/\s+/g, "").toLowerCase()}
            </p>
            <TimeAgo className={styles["created-at"]} date={tweet._createdAt} />
          </div>
          <p>{tweet.text}</p>
          {tweet.tweetImage && (
            <Image
              src={urlFor(tweet.tweetImage).url()}
              alt="tweet image"
              className={styles["tweet-image"]}
              width={50}
              height={50}
            />
          )}
        </div>
      </div>

      <div className={styles["container-tweet-actions"]}>
        <div className={styles["container-action-icon"]}>
          <ChatBubbleOutlineIcon sx={iconStyles} />
          <p>5</p>
        </div>
        <div className={styles["container-action-icon"]}>
          <RepeatIcon sx={iconStyles} />
        </div>
        <div className={styles["container-action-icon"]}>
          <FavoriteBorderIcon sx={iconStyles} />
        </div>
        <div className={styles["container-action-icon"]}>
          <IosShareIcon sx={iconStyles} />
        </div>
      </div>
    </div>
  );
}

export default Tweet;
