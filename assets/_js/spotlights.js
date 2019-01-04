import '@babel/polyfill'

import Explainer from './spotlights/explainer'
import HeaderShare from './spotlights/header-share'
import ProgressBar from './spotlights/progress-bar'
import ImageGallery from './spotlights/image-gallery'
import TableOfContents from './spotlights/tableofcontents'
import Tippy from './spotlights/tippy'

window.addEventListener('DOMContentLoaded', () => {
  Explainer()
  HeaderShare()
  ProgressBar()
  ImageGallery()
  TableOfContents()
  Tippy()
})
