const home = {
  label: 'Home',
  name: 'home',
  path: 'pages',
  ui: {
    allowedActions: {
      create: false,
      delete: false
    }
  },
  match: {
    include: 'index'
  },
  fields: [
    {
      type: 'string',
      name: 'layout',
      label: 'Layout'
    },
    {
      type: 'string',
      name: 'wrapper',
      label: 'Wrapper'
    },
    {
      type: 'string',
      name: 'permalink',
      label: 'Permalink'
    },
    {
      label: 'Featured Spotlights',
      name: 'featured_spotlights',
      type: 'string',
      list: true
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

export default home
