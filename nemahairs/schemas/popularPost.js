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
        title: 'title',
        author: 'author.name',
        media: 'mainImage',
      },
      prepare(selection) {
        const {author} = selection
        return Object.assign({}, selection, {
          subtitle: author && `by ${author}`,
        })
      },
    },
  }
  