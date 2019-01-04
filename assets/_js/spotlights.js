import '@babel/polyfill'

import Explainer from './spotlights/explainer'
import HeaderShare from './spotlights/header-share'
import ImageGallery from './spotlights/image-gallery'
import Lightbox from './spotlights/lightbox'
import ProgressBar from './spotlights/progress-bar'
import TableOfContents from './spotlights/tableofcontents'
import Tippy from './spotlights/tippy'

window.addEventListener('DOMContentLoaded', () => {
  Explainer()
  HeaderShare()
  ImageGallery()
  Lightbox()
  ProgressBar()
  TableOfContents()
  Tippy()
})
