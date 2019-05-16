import SmoothScroll from 'smooth-scroll'
import { findFootnotes, toggle } from './spotlights/footnotes'

const smoothScroll = () => {
  let scroll = new SmoothScroll('a[href*="#"]', {
    header: '.site-header',
    speed: 500
  })

  const expandFootnotes = event => {
    if (event.detail.toggle.classList.contains('footnote')) {
      const { readMore, hiddenFootnotes } = findFootnotes()

      toggle(false, readMore, hiddenFootnotes)
    }
  }

  document.addEventListener('scrollStart', expandFootnotes, false)
}

export default smoothScroll
