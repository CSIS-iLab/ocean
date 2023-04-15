const spotlights = {
  label: 'Spotlights',
  name: 'spotlights',
  path: '_spotlights',
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
      label: 'Prefix',
      name: 'prefix',
      type: 'string'
    },
    {
      label: 'Js files',
      name: 'js_files',
      type: 'string',
      list: true
    },
    {
      label: 'Css files',
      name: 'css_files',
      type: 'string',
      list: true
    },
    {
      label: 'Include Header',
      name: 'include_header',
      type: 'string'
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
      label: 'Authors',
      name: 'authors',
      type: 'string',
      list: true
    },
    {
      label: 'Keywords',
      type: 'string',
      name: 'keywords',
      list: true
    },
    {
      label: 'Further Reading',
      name: 'further_reading',
      type: 'string',
      ui: {
        component: 'textarea'
      }
    },
    {
      label: 'Methodology',
      name: 'methodology',
      type: 'string',
      ui: {
        component: 'textarea'
      }
    },
    {
      label: 'Featured Post',
      name: 'is_featured',
      type: 'boolean'
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
      label: 'Image Groups',
      name: 'image_groups',
      type: 'object',
      fields: [
        {
          label: 'Reefs',
          name: 'reefs',
          type: 'object',
          list: true,
          fields: [
            {
              label: 'URL',
              name: 'url',
              type: 'string'
            },
            {
              label: 'Caption',
              name: 'caption',
              type: 'string'
            },
            {
              label: 'Credit',
              name: 'credit',
              type: 'string'
            }
          ]
        },
        {
          label: 'Ships',
          name: 'ships',
          type: 'object',
          list: true,
          fields: [
            {
              label: 'URL',
              name: 'url',
              type: 'string'
            },
            {
              label: 'Caption',
              name: 'caption',
              type: 'string'
            },
            {
              label: 'Credit',
              name: 'credit',
              type: 'string'
            }
          ]
        },
        {
          label: 'Yue Tai Yu',
          name: 'yue_tai_yu',
          type: 'object',
          list: true,
          fields: [
            {
              label: 'URL',
              name: 'url',
              type: 'string'
            },
            {
              label: 'Caption',
              name: 'caption',
              type: 'string'
            },
            {
              label: 'Credit',
              name: 'credit',
              type: 'string'
            }
          ]
        },
        {
          label: 'Yue Tai Yu Composite',
          name: 'yue_tai_yu_composite',
          type: 'object',
          list: true,
          fields: [
            {
              label: 'URL',
              name: 'url',
              type: 'string'
            },
            {
              label: 'Caption',
              name: 'caption',
              type: 'string'
            },
            {
              label: 'Credit',
              name: 'credit',
              type: 'string'
            }
          ]
        }
      ]
    },
    {
      label: 'Contributors',
      name: 'contributors',
      type: 'object',
      list: true,
      fields: [
        {
          label: 'Label',
          name: 'label',
          type: 'string'
        },
        {
          label: 'Content',
          name: 'content',
          type: 'string',
          ui: {
            component: 'textarea'
          }
        }
      ]
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

export default spotlights
