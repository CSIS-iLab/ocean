const Header = () => {
  const header = document.querySelector('.site-header')
  const header_height = header.offsetHeight + 5
  const minimal_class = 'site-header--minimal'
  let scrollPos = window.pageYOffset
  let offsetScroll = true
  let lastScrollPos = 0

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

      if (scrollPos < lastScrollPos) {
        const nav_trigger = document.querySelector('.site-header__nav-trigger')
        const nav = document.querySelector('.site-header__nav-menu')

        nav.setAttribute('aria-expanded', 'false')
        nav.classList.remove('is-active')
        nav_trigger.classList.remove('is-active')

        const share_trigger = document.querySelector(
          '.site-header__share-trigger'
        )
        const share = document.querySelector('.site-header__share ul.share')

        if (share_trigger) {
          share.setAttribute('aria-expanded', 'false')
          share.classList.remove('is-active')
          share_trigger.classList.remove('is-active')
        }
      }
    }

    lastScrollPos = scrollPos
  })
}

export default Header
