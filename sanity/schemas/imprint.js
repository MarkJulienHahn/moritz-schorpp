import { defineField, defineType } from "sanity";

export default defineType({
  name: "imprint",
  title: "Imprint",
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
  ],
});
