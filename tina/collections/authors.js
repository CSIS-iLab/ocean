const authors = {
  label: 'Authors',
  name: 'authors',
  path: '_authors',
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
      label: 'Name',
      name: 'title',
      type: 'string'
    },
    {
      label: 'Date',
      name: 'date',
      type: 'datetime'
    },
    {
      label: 'Headshot',
      name: 'headshot',
      type: 'image'
    },
    {
      label: 'Role',
      name: 'role',
      type: 'string'
    },
    {
      label: 'Byline',
      name: 'byline',
      type: 'string'
    },
    {
      type: 'rich-text',
      name: 'body',
      label: 'Body of Document',
      description: 'This is the markdown body',
      isBody: true
    }
  ]
}

export default authors
