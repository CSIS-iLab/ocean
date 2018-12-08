const TableOfContents = () => {
  const exclude_toc = '.exclude-toc'
  const include_toc = '.include-toc'
  const toc_container = document.getElementById('toc')
  const headings = document.querySelectorAll(
    '.post-content h2:not(' + exclude_toc + '), .post-content ' + include_toc
  )
  let counter = 0
  let toc_items = ''

  console.log(headings)

  headings.forEach((header, i) => {
    const text = header.innerHTML
    let hash = 'toc-' + counter
    if (header.id) {
      hash = header.id
    }
    header.id = hash

    let list_class = ''
    if (i == 0) {
      list_class = 'is-current'
    }

    toc_items += `<li class="${list_class}"><a href="#${hash}">${text}</a></li>`

    counter++
  })

  toc_container.innerHTML = toc_items
}

export default TableOfContents
