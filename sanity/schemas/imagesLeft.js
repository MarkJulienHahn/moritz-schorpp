import { defineField, defineType } from "sanity";
import { orderRankField } from "@sanity/orderable-document-list";

export default defineType({
  name: "imagesLeft",
  title: "Images Left",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      fields: [{ name: "alt", title: "Alt", type: "string" }],
      validation: (Rule) => Rule.required(),
    },
    orderRankField({ type: "imagesLeft" }),
  ],
});
