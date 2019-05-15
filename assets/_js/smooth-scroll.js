import SmoothScroll from 'smooth-scroll'

const smoothScroll = () => {
  let scroll = new SmoothScroll('a[href*="#"]', {
    header: '.site-header',
    speed: 500
  })

  const expandFootnotes = event => {
    if (event.detail.toggle.classList.contains('footnote')) {
      const readMore = document.querySelector('button.read-more')
      const hiddenFootnotes = Array.from(
        document.querySelectorAll('.footnotes ol li:nth-child(3) ~ li')
      )
      hiddenFootnotes.forEach(footnote => {
        footnote.style.visibility = 'visible'
        footnote.style.position = 'static'
      })
      readMore.innerText = 'Read Less'
      readMore.classList.add('is-active')
      readMore.setAttribute('aria-expanded', 'true')
    }
  }

  document.addEventListener('scrollStart', expandFootnotes, false)
}

export default smoothScroll
