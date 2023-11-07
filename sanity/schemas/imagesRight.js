import { defineField, defineType } from "sanity";
import { orderRankField } from "@sanity/orderable-document-list";

export default defineType({
  name: "imagesRight",
  title: "Images Right",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      fields: [{ name: "alt", title: "Alt", type: "string" }],
      validation: (Rule) => Rule.required(),
    },
    orderRankField({ type: "imagesRight" }),
  ],
});
