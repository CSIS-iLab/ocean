import '@babel/polyfill'

import ArchiveCutout from './archive-cutout'
import AlgoliaSearch from './algolia-search'

window.addEventListener('DOMContentLoaded', () => {
  ArchiveCutout()
  AlgoliaSearch()
})
