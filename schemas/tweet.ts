import { defineField, defineType } from "sanity";

export default defineType({
  name: "tweet",
  title: "Tweet",
  type: "document",
  fields: [
    defineField({
      name: "text",
      title: "Text in Tweet",
      type: "string",
    }),
    defineField({
      name: "blockTweet",
      title: "Block Tweet",
      description: "ADMIN CONTROLS: Toggle if Tweet is deemed inappropriate",
      type: "boolean",
    }),
    defineField({
      name: "username",
      title: "Username",
      type: "string",
    }),
    defineField({
      name: "profileImg",
      title: "Profile Image",
      type: "image",
    }),
    defineField({
      name: "tweetImage",
      title: "Tweet Image",
      type: "image",
    }),
  ],
});
