import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../utils/lib/sanity/sanity.client";
import { groq } from "next-sanity";
import { IComment } from "../../interfaces";

const commentQuery = groq`
*[_type=="comment" && references(*[_type == "tweet" && _id == $tweetId]._id)] {
  _id,
  ...
} | order(_createdAt desc)
`;

type Data = IComment[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { tweetId } = req.query;
  const comments: IComment[] = await sanityClient.fetch(commentQuery, {
    tweetId: tweetId,
  });

  res.status(200).json(comments);
}
