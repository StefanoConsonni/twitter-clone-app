export interface ITweetBody {
  text: string;
  username: string;
  profileImg: string;
  tweetImage?: string;
}

export interface ITweet extends ITweetBody {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: "tweet";
  blockTweet: boolean;
}

export interface ICommentBody {
  comment: string;
  tweetId: string;
  username: string;
  profileImg: string;
}

export interface IComment extends ICommentBody {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: "comment";
  tweet: {
    _ref: string;
    _type: "reference ";
  };
}
