export default {
  name: "advertisement",
  title: "Advertisement",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "link",
      title: "Link",
      type: "url",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
};
