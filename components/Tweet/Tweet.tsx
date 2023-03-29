import Image from "next/image";
import TimeAgo from "react-timeago";
import { ITweet } from "../../interfaces";
import urlFor from "../../utils/functions/urlFor";

interface Props {
  tweet: ITweet;
}

function Tweet({ tweet }: Props) {
  return (
    <div>
      <div>
        <Image
          src={urlFor(tweet.profileImg).url()}
          alt={"profile picture of" + tweet.username}
          width={50}
          height={50}
        />
      </div>

      <div>
        <p>{tweet.username}</p>
        <p>@{tweet.username.replace(/\s+/g, "").toLowerCase()}</p>
        <TimeAgo className="" date={tweet._createdAt} />
      </div>
    </div>
  );
}

export default Tweet;
