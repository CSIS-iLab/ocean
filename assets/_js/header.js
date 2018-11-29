const Header = () => {
  const header = document.querySelector('.site-header')
  const header_height = header.offsetHeight + 5
  const minimal_class = 'site-header--minimal'
  let scrollPos = window.pageYOffset
  let offsetScroll = true

  window.addEventListener('scroll', function() {
    if (document.documentElement.classList.contains('js-no-scroll')) {
      return false
    }

    scrollPos = window.pageYOffset

    if (!offsetScroll) {
      scrollPos += header_height
    }

    if (scrollPos > header_height) {
      offsetScroll = false

      header.classList.add(minimal_class)
    } else {
      offsetScroll = true
      header.classList.remove(minimal_class)
    }
  })
}

export default Header
