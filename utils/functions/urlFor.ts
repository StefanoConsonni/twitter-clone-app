import { sanityClient } from "../lib/sanity/sanity.client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

export default function urlFor(source: any) {
  return builder.image(source);
}
