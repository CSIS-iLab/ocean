import scroll from '@threespot/freeze-scroll'

const Navigation = () => {
  const trigger = document.querySelector('.site-header__nav-trigger')
  const menu = document.querySelector('.site-header__nav-menu')
  const overlay = document.querySelector('.content-overlay')
  const header = document.querySelector('.site-header')

  trigger.addEventListener('click', function() {
    if (menu.classList.contains('is-active')) {
      closeMenu(this)
    } else {
      menu.classList.add('is-active')
      this.setAttribute('aria-expanded', 'true')
      this.classList.add('is-active')
      overlay.classList.add('is-active')
      header.classList.add('site-header--menu-active')
      scroll.freeze()
    }
  })

  overlay.addEventListener('click', function() {
    closeMenu(trigger)
  })

  function closeMenu(el) {
    el.setAttribute('aria-expanded', 'false')
    el.classList.remove('is-active')
    menu.classList.remove('is-active')
    overlay.classList.remove('is-active')
    header.classList.remove('site-header--menu-active')
    scroll.unfreeze()
  }
}

export default Navigation
