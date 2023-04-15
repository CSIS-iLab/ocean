import { defineConfig } from 'tinacms'
import authors from './collections/authors'
import language from './collections/global/language'
import about from './collections/pages/about'
import commentary from './collections/pages/commentary'
import home from './collections/pages/home'
import newsletter from './collections/pages/newsletter'
import search from './collections/pages/search'
import spotlight from './collections/pages/spotlight'
import posts from './collections/posts'
import spotlights from './collections/spotlights'

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'master'

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: 'admin',
    publicFolder: './'
  },
  media: {
    tina: {
      mediaRoot: 'assets/images',
      publicFolder: ''
    }
  },
  schema: {
    collections: [
      home,
      about,
      commentary,
      posts,
      spotlight,
      spotlights,
      authors,
      newsletter,
      search,
      language
    ]
  }
})
