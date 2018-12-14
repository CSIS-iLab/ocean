import Explainer from './spotlights/explainer'
import HeaderShare from './spotlights/header-share'
import ProgressBar from './spotlights/progress-bar'
import TableOfContents from './spotlights/tableofcontents'
import Tippy from './spotlights/tippy'

window.addEventListener('DOMContentLoaded', () => {
  Explainer()
  HeaderShare()
  ProgressBar()
  TableOfContents()
  Tippy()
})
