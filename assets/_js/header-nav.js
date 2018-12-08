import scroll from '@threespot/freeze-scroll'

const Navigation = () => {
  const overlay = document.querySelector('.content-overlay')
  const header = document.querySelector('.site-header')
  const triggers = document.querySelectorAll('.menu-trigger')

  triggers.forEach(trigger => {
    const target = document.querySelector(trigger.dataset.target)

    trigger.addEventListener('click', function() {
      if (target.classList.contains('is-active')) {
        closeMenu(trigger, target)
      } else {
        target.classList.add('is-active')
        this.setAttribute('aria-expanded', 'true')
        this.classList.add('is-active')
        overlay.classList.add('is-active')
        header.classList.add('site-header--menu-active')
        scroll.freeze()
      }
    })

    overlay.addEventListener('click', function() {
      closeMenu(trigger, target)
    })
  })

  function closeMenu(trigger, target) {
    trigger.setAttribute('aria-expanded', 'false')
    trigger.classList.remove('is-active')
    target.classList.remove('is-active')
    overlay.classList.remove('is-active')
    header.classList.remove('site-header--menu-active')
    scroll.unfreeze()
  }
}

export default Navigation
