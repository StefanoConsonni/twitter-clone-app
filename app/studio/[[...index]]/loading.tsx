"use client";

import config from "../../../utils/lib/sanity/sanity.config";
import { NextStudioLoading } from "next-sanity/studio/loading";

export default function Loading() {
  return <NextStudioLoading config={config} />;
}
