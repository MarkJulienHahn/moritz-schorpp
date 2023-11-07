import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

export const myStructure = (S, context) =>
  S.list()
    .title("Content")
    .items([
      orderableDocumentListDeskItem({
        type: "imagesLeft",
        title: "Images Left",
        S,
        context,
      }),
      orderableDocumentListDeskItem({
        type: "imagesRight",
        title: "Images Right",
        S,
        context,
      }),
      S.divider(),
      orderableDocumentListDeskItem({
        type: "imagesMobile",
        title: "Images Mobile",
        S,
        context,
      }),
      S.divider(),
      S.listItem()
        .title("Info")
        .id("info")
        .child(S.document().schemaType("info").documentId("info")),
    ]);
