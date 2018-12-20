const Header = () => {
  const header = document.querySelector('.site-header')
  const header_height = header.offsetHeight + 5
  const minimal_class = 'site-header--minimal'
  let scrollPos = window.pageYOffset
  let offsetScroll = true

  if (document.body.classList.contains('layout-spotlight')) {
    return
  }

  if (scrollPos > header_height) {
    minimalHeader()
  }

  window.addEventListener('scroll', function() {
    if (document.documentElement.classList.contains('js-no-scroll')) {
      return false
    }

    scrollPos = window.pageYOffset

    if (!offsetScroll) {
      scrollPos += header_height
    }

    if (scrollPos > header_height) {
      minimalHeader()
    } else {
      offsetScroll = true
      header.classList.remove(minimal_class)
    }
  })

  function minimalHeader() {
    offsetScroll = false
    header.classList.add(minimal_class)
  }
}

export default Header
