import BackgroundTextScroll from './spotlights/backgroundTextScroll'
import Explainer from './spotlights/explainer'
import HeaderShare from './spotlights/header-share'
import ImageGallery from './spotlights/image-gallery'
import Lightbox from './spotlights/lightbox'
import objectFitVideos from 'object-fit-videos'
import ProgressBar from './spotlights/progress-bar'
import TableOfContents from './spotlights/tableofcontents'
import Tippy from './spotlights/tippy'

window.addEventListener('DOMContentLoaded', () => {
  BackgroundTextScroll()
  Explainer()
  HeaderShare()
  ImageGallery()
  Lightbox()
  objectFitVideos()
  ProgressBar()
  TableOfContents()
  Tippy()
})
