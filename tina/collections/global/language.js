const language = {
  format: 'yaml',
  label: 'Language',
  name: 'language',
  path: '_data',
  ui: {
    global: true,
    allowedActions: {
      create: false,
      delete: false
    }
  },
  match: {
    include: 'language'
  },
  fields: [
    {
      name: 'csis',
      label: 'Center for Strategic and International Studies',
      type: 'string'
    },
    {
      name: 'tagline',
      label: 'Tagline',
      type: 'string'
    },
    {
      name: 'author_list',
      label: 'Author List',
      type: 'string'
    },
    {
      name: 'related_topics',
      label: 'Related Topics',
      type: 'string'
    },
    {
      name: 'related_content',
      label: 'Related Content',
      type: 'string'
    },
    {
      name: 'further_reading',
      label: 'Further Reading',
      type: 'string'
    },
    {
      name: 'view_all',
      label: 'View All',
      type: 'string'
    },
    {
      name: 'view_all_commentaries',
      label: 'View All Commentaries',
      type: 'string'
    },
    {
      name: 'view_all_spotlights',
      label: 'View All Spotlights',
      type: 'string'
    },
    {
      name: 'all_spotlights',
      label: 'All Spotlights',
      type: 'string'
    },
    {
      name: 'latest_commentary',
      label: 'Latest Commentary',
      type: 'string'
    },
    {
      name: 'featured_essays',
      label: 'Featured Essays',
      type: 'string'
    },
    {
      name: 'learn_more',
      label: 'Learn More',
      type: 'string'
    },
    {
      name: 'credits',
      label: 'Credits',
      type: 'string'
    },
    {
      name: 'authors',
      label: 'Authors',
      type: 'string'
    },
    {
      name: 'methodology',
      label: 'Methodology',
      type: 'string'
    },
    {
      name: 'about_the',
      label: 'About the',
      type: 'string'
    },
    {
      name: 'home',
      label: 'Home',
      type: 'object',
      fields: [
        {
          name: 'about_title',
          label: 'About Title',
          type: 'string'
        },
        {
          name: 'about_desc_one',
          label: 'About Description One',
          type: 'string',
          ui: {
            component: 'textarea'
          }
        },
        {
          name: 'about_desc_two',
          label: 'About Description Two',
          type: 'string',
          ui: {
            component: 'textarea'
          }
        },
        {
          name: 'spotlights_title',
          label: 'Spotlights Title',
          type: 'string'
        },
        {
          name: 'spotlights_desc',
          label: 'Spotlights Description',
          type: 'string',
          ui: {
            component: 'textarea'
          }
        }
      ]
    },
    {
      name: 'footer',
      label: 'Footer',
      type: 'object',
      fields: [
        {
          name: 'mailing_list',
          label: 'Mailing List',
          type: 'string'
        },
        {
          name: 'mailing_desc',
          label: 'Mailing Description',
          type: 'string',
          ui: {
            component: 'textarea'
          }
        },
        {
          name: 'mailing_signup',
          label: 'Mailing Signup',
          type: 'string'
        },
        {
          name: 'contact_heading',
          label: 'Contact Heading',
          type: 'string'
        },
        {
          name: 'copyright',
          label: 'Copyright',
          type: 'string'
        },
        {
          name: 'privacy',
          label: 'Privacy',
          type: 'string'
        }
      ]
    },
    {
      name: 'read_more',
      label: 'Read More',
      type: 'string'
    },
    {
      name: 'published_label',
      label: 'Published Label',
      type: 'string'
    },
    {
      name: 'by_label',
      label: 'By Label',
      type: 'string'
    },
    {
      name: 'is_featured',
      label: 'Featured Label',
      type: 'string'
    },
    {
      name: 'search_placeholder',
      label: 'Search Placeholder',
      type: 'string'
    },
    {
      name: 'search_title',
      label: 'Search Title',
      type: 'string'
    },
    {
      name: 'authors_title',
      label: 'Authors Title',
      type: 'string'
    },
    {
      name: 'ilab',
      label: 'iLab Text',
      type: 'string',
      ui: {
        component: 'textarea'
      }
    },
    {
      name: 'the_team',
      label: 'The Team',
      type: 'string'
    },
    {
      name: 'development_team',
      label: 'Development Team',
      type: 'string'
    },
    {
      name: 'support',
      label: 'Support',
      type: 'string'
    },
    {
      name: 'stephenson_foundation',
      label: 'Stephenson Foundation Text',
      type: 'string',
      ui: {
        component: 'textarea'
      }
    },
    {
      name: 'about_csis',
      label: 'About CSIS',
      type: 'string'
    },
    {
      name: 'about_csis_desc',
      label: 'About CSIS Description',
      type: 'string',
      ui: {
        component: 'textarea'
      }
    }
  ]
}

export default language
