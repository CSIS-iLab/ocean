const Footnotes = () => {
  if (!document.querySelector('.footnotes')) return

  const footnotes = document.querySelector('.footnotes ol')

  const readMore = document.createElement('button')
  readMore.classList.add('read-more')

  footnotes.parentNode.insertBefore(readMore, footnotes.nextSibling)

  const hiddenFootnotes = document.querySelectorAll(
    '.footnotes ol li:nth-child(3) ~ li'
  )

  const toggle = ariaExpanded => {
    if (!ariaExpanded) {
      hiddenFootnotes.forEach(footnote => {
        footnote.style.display = 'list-item'
      })
      readMore.innerText = 'Read Less'
      readMore.classList.add('is-active')
      readMore.setAttribute('aria-expanded', 'true')
    } else {
      hiddenFootnotes.forEach(footnote => {
        footnote.style.display = 'none'
      })
      readMore.innerText = 'Read More'
      readMore.classList.remove('is-active')
      readMore.setAttribute('aria-expanded', 'false')
    }
  }

  toggle(true)

  readMore.addEventListener('click', function() {
    let ariaExpanded =
      Array.from(readMore.attributes).find(attribute => {
        return attribute.nodeName === 'aria-expanded'
      }).nodeValue === 'true'

    toggle(ariaExpanded)
  })
}

export default Footnotes
