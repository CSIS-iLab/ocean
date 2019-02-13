const Footnotes = () => {
  if (!document.querySelector('.footnotes')) return

  const fifth = document.querySelector('.footnotes ol li:nth-child(6)')

  const readMore = document.createElement('button')
  readMore.classList.add('read-more')

  fifth.parentNode.insertBefore(readMore, fifth)

  const hiddenFootnotes = document.querySelectorAll('.read-more ~ li')

  const initializeButton = () => {
    hiddenFootnotes.forEach(footnote => {
      footnote.style.display = 'none'
    })
    readMore.innerText = 'Read More'
    readMore.classList.remove('is-active')
    readMore.setAttribute('aria-expanded', 'true')
  }

  initializeButton()

  readMore.addEventListener('click', function() {
    let ariaExpanded =
      Array.from(readMore.attributes).find(attribute => {
        return attribute.nodeName === 'aria-expanded'
      }).nodeValue === 'true'

    if (ariaExpanded) {
      hiddenFootnotes.forEach(footnote => {
        footnote.style.display = 'block'
      })
      readMore.innerText = 'Read Less'
      readMore.classList.add('is-active')
      readMore.setAttribute('aria-expanded', 'false')
    } else {
      initializeButton()
    }
  })
}

export default Footnotes
