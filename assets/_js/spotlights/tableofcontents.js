const TableOfContents = () => {
  const exclude_toc = '.exclude-toc'
  const include_toc = '.include-toc'
  const toc_container = document.getElementById('toc')
  const headings = document.querySelectorAll(
    '.post__content h2:not(' + exclude_toc + '), .post__content ' + include_toc
  )
  const observer_config = {
    rootMargin: '0px',
    threshold: 1
  }
  let counter = 0
  let toc_items = ''

  const observer = new IntersectionObserver(handleObserver, observer_config)

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

    toc_items += `<li class="${list_class}" data-target="${hash}"><a href="#${hash}">${text}</a></li>`

    observer.observe(header)

    counter++
  })

  toc_container.innerHTML = toc_items

  const toc_links = toc_container.querySelectorAll('li')
  let previous_section

  function handleObserver(entries, observer) {
    entries.forEach(entry => {
      let href = `${entry.target.getAttribute('id')}`
      let link = Array.from(toc_links).find(
        l => l.getAttribute('data-target') === href
      )

      if (entry.isIntersecting && entry.intersectionRatio === 1) {
        link.classList.add('is-visible')
        previous_section = entry.target.getAttribute('id')
      } else {
        link.classList.remove('is-visible')
      }

      highlightFirstActive()
    })
  }

  function highlightFirstActive() {
    let firstVisibleLink = toc_container.querySelector('.is-visible')

    toc_links.forEach(link => {
      link.classList.remove('is-current')
    })

    if (firstVisibleLink) {
      firstVisibleLink.classList.add('is-current')
    }

    if (!firstVisibleLink && previous_section) {
      toc_container
        .querySelector(`li[data-target="${previous_section}"]`)
        .classList.add('is-current')
    }
  }
}

export default TableOfContents
