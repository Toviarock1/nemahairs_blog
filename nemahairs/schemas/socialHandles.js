export default {
    name: "social-handle-links",
    title: "Social Handle Links",
    type: "document",
    fields: [
      {
        name: "twitter_link",
        title: "Twitter Link",
        type: "url",
      },
      {
        name: "facebook_link",
        title: "Facebook Link",
        type: "url",
      },
      {
        name: "instagram_link",
        title: "Instagram Link",
        type: "url",
      },
      {
        name: "linkedIn_link",
        title: "LinkedIn Link",
        type: "url",
      },
      {
        name: "pintrest_link",
        title: "Pintrest Link",
        type: "url",
      },
    ],
    preview: {
      select: {
        title: "title"
      },
    },
  };
  