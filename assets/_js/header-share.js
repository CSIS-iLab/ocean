const Share = () => {
  const trigger = document.querySelector('.site-header__share-trigger')
  const share = document.querySelector('.site-header__share ul.share')
  trigger.addEventListener('click', function() {
    if (share.classList.contains('is-active')) {
      this.setAttribute('aria-expanded', 'false')
      this.classList.remove('is-active')
      share.classList.remove('is-active')
    } else {
      share.classList.add('is-active')
      this.setAttribute('aria-expanded', 'true')
      this.classList.add('is-active')
    }
  })
}

window.addEventListener('DOMContentLoaded', () => {
  Share()
})
