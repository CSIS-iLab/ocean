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
// const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'master'
const branch =
  process.env.HEAD || // Netlify branch env
  process.env.NEXT_PUBLIC_TINA_BRANCH || // custom branch env override
  'master'

export default defineConfig({
  branch,
  clientId: process.env.TINA_PUBLIC_CLIENT_ID, // Get this from tina.io
  token: process.env.TINA_TOKEN, // Get this from tina.io
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
