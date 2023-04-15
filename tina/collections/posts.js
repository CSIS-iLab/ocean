const posts = {
  label: 'Commentaries',
  name: 'commentaries',
  path: '_posts',
  match: {
    include: '**/*'
  },
  ui: {
    filename: {
      readonly: false,
      slugify: values => {
        return values?.title
          ?.toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^\w\-]+/g, '')
      }
    }
  },
  fields: [
    {
      label: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      label: 'Date',
      name: 'date',
      type: 'datetime'
    },
    {
      label: 'Image',
      name: 'image',
      type: 'image'
    },
    {
      label: 'Image Caption',
      name: 'image_caption',
      type: 'string'
    },
    {
      label: 'Image Source',
      name: 'image_source',
      type: 'string'
    },
    {
      label: 'Authors',
      name: 'authors',
      type: 'string',
      list: true
    },
    {
      label: 'Excerpt',
      name: 'excerpt',
      type: 'string',
      ui: {
        component: 'textarea'
      }
    },
    {
      label: 'Lede',
      name: 'lede',
      type: 'string',
      ui: {
        component: 'textarea'
      }
    },
    {
      label: 'Keywords',
      type: 'string',
      name: 'keywords',
      list: true
    },
    {
      label: 'Related Spotlight',
      name: 'related_spotlight',
      type: 'string',
      list: true
    },
    {
      label: 'Related Commentary',
      name: 'related_commentary',
      type: 'string',
      list: true
    },
    {
      label: 'Featured Post',
      name: 'is_featured',
      type: 'boolean'
    },
    {
      label: 'Body of Document',
      name: 'body',
      type: 'rich-text',
      description: 'This is the markdown body',
      isBody: true
    }
  ]
}

export default posts
