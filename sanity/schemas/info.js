import { defineField, defineType } from "sanity";
import { orderRankField } from "@sanity/orderable-document-list";

export default defineType({
  name: "info",
  title: "Info",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string", hidden: true },
    {
      name: "text",
      title: "Text",
      type: "array",
      of: [
        {
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
          marks: {
            decorators: [{ title: "Strong", value: "strong" }],
          },
        },
      ],
    },
    {
      name: "textLeft",
      title: "Text links",
      type: "array",
      of: [
        {
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
          marks: {
            decorators: [{ title: "Strong", value: "strong" }],
          },
        },
      ],
    },
    { name: "phone", title: "Phone", type: "string" },
    { name: "email", title: "E-Mail", type: "string" },
    orderRankField({ type: "imagesRight" }),
  ],
});
