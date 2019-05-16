const Footnotes = () => {
  if (!document.querySelector('.footnotes')) return

  const footnotes = document.querySelector('.footnotes ol')

  const buttonNode = document.createElement('button')
  buttonNode.classList.add('read-more')

  footnotes.parentNode.insertBefore(buttonNode, footnotes.nextSibling)

  const { readMore, hiddenFootnotes } = findFootnotes()

  toggle(true, readMore, hiddenFootnotes)

  readMore.addEventListener('click', function() {
    let ariaExpanded =
      Array.from(readMore.attributes).find(attribute => {
        return attribute.nodeName === 'aria-expanded'
      }).nodeValue === 'true'

    toggle(ariaExpanded, readMore, hiddenFootnotes)
  })
}

export default Footnotes

export const findFootnotes = () => {
  const readMore = document.querySelector('button.read-more')

  const hiddenFootnotes = Array.from(
    document.querySelectorAll('.footnotes ol li:nth-child(3) ~ li')
  )

  return { readMore, hiddenFootnotes }
}

export const toggle = (ariaExpanded, readMore, hiddenFootnotes) => {
  if (!ariaExpanded) {
    hiddenFootnotes.forEach(footnote => {
      footnote.style.opacity = 1
      footnote.style.visibility = 'visible'
      footnote.style.position = 'static'
    })

    readMore.innerText = 'Read Less'
    readMore.classList.add('is-active')
    readMore.setAttribute('aria-expanded', 'true')
  } else {
    hiddenFootnotes.forEach(footnote => {
      footnote.style.opacity = 0
      footnote.style.visibility = 'hidden'
      footnote.style.position = 'absolute'
    })

    readMore.innerText = 'Read More'
    readMore.classList.remove('is-active')
    readMore.setAttribute('aria-expanded', 'false')
  }
}
