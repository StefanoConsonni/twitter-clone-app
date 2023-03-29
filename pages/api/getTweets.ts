import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../utils/lib/sanity/sanity.client";
import { groq } from "next-sanity";
import { ITweet } from "../../interfaces";

const feedQuery = groq`
*[_type=='tweet']{
  _id,
  ...
} | order(_createdAt desc)
`;

type Data = {
  tweets: ITweet[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const tweets: ITweet[] = await sanityClient.fetch(feedQuery);

  res.status(200).json({ tweets });
}
