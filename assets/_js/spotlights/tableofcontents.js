const TableOfContents = () => {
  const exclude_toc = '.exclude-toc'
  const include_toc = '.include-toc'
  const toc_container = document.getElementById('toc')
  const headings = Array.from(
    document.querySelectorAll(
      '.spotlight__content h2:not(' +
        exclude_toc +
        '), .spotlight__content ' +
        include_toc
    )
  )

  const current_section = document.querySelector('.site-header__section')
  const title = document.querySelector('.spotlight__header h1')
  const observer_config = {
    rootMargin: '0px',
    threshold: 0
  }
  let counter = 0
  let toc_items = ''

  const observer = new IntersectionObserver(handleObserver, observer_config)
  observer.observe(title)
  observer.observe(document.querySelector('#spotlight__intro'))

  headings.forEach((header, i) => {
    const text = header.innerHTML
    let hash = 'toc-' + counter
    if (header.id) {
      hash = header.id
    }
    header.id = hash

    toc_items += `<li data-target="${hash}"><a href="#${hash}">${text}</a></li>`

    observer.observe(header)

    counter++
  })

  toc_container.innerHTML += toc_items

  const toc_links = Array.from(toc_container.querySelectorAll('li'))

  let previous_section

  function handleObserver(entries, observer) {
    entries.forEach(entry => {
      let href = `${entry.target.getAttribute('id')}`
      let link = Array.from(toc_links).find(
        l => l.getAttribute('data-target') === href
      )

      if (link) {
        if (entry.isIntersecting && entry.intersectionRatio > 0) {
          link.classList.add('is-visible')
          previous_section = entry.target.getAttribute('id')
        } else {
          link.classList.remove('is-visible')
        }
        highlightFirstActive()
      } else if (!link && entry.isIntersecting && entry.intersectionRatio > 0) {
        current_section.innerHTML = document.querySelector(
          'h1.post-title'
        ).textContent
        previous_section = entry.target.getAttribute('id')
      }
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

    let current = toc_container.querySelector('.is-current a')
    if (!current) {
      current_section.innerHTML = title.textContent
    } else {
      current_section.innerHTML = current.innerHTML
    }
  }
}

export default TableOfContents
