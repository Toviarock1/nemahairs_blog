export default {
    name: 'popular-post',
    title: 'Popular Post',
    type: 'document',
    fields: [
      {
        name: 'posts',
        title: 'Posts',
        type: 'array',
        of: [{type: 'reference', to: {type: 'post'}}],
      },
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
      }
    ],
  
    preview: {
      select: {
        title: 'publishedAt'
      },
    },
  }
  