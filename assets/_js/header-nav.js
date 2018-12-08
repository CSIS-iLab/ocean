import scroll from '@threespot/freeze-scroll'

const Navigation = () => {
  const overlay = document.querySelector('.content-overlay')
  const header = document.querySelector('.site-header')
  const triggers = document.querySelectorAll('.menu-trigger')
  let is_spotlight = false

  if (document.body.classList.contains('layout-spotlight')) {
    is_spotlight = true
  }

  triggers.forEach(trigger => {
    const target = document.querySelector(trigger.dataset.target)

    trigger.addEventListener('click', function() {
      if (target.classList.contains('is-active')) {
        closeMenu(trigger, target)
      } else {
        target.classList.add('is-active')
        this.setAttribute('aria-expanded', 'true')
        this.classList.add('is-active')
        header.classList.add('site-header--menu-active')

        if (is_spotlight) {
          return
        }
        overlay.classList.add('is-active')
        scroll.freeze()
      }
    })

    overlay.addEventListener('click', function() {
      closeMenu(trigger, target)
    })

    if (is_spotlight) {
      // Set a delay to give the ToC time to populate
      setTimeout(function() {
        const toc_links = document.querySelectorAll('.spotlight-nav a')

        toc_links.forEach(link => {
          link.addEventListener('click', function() {
            closeMenu(trigger, target)
          })
        })
      }, 1000)
    }
  })

  function closeMenu(trigger, target) {
    trigger.setAttribute('aria-expanded', 'false')
    trigger.classList.remove('is-active')
    target.classList.remove('is-active')
    header.classList.remove('site-header--menu-active')

    if (is_spotlight) {
      return
    }
    overlay.classList.remove('is-active')
    scroll.unfreeze()
  }
}

export default Navigation
