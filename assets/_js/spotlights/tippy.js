import tippy from 'tippy.js'
import Breakpoints from '../breakpoints'

const Tippy = () => {
  tippy.setDefaults({
    theme: 'light',
    arrow: Breakpoints.isMobile() ? false : true,
    hideOnClick: true,
    interactive: false, //errors if true
    trigger: 'click',
    showOnInit: true,
    onMount(tip) {
      exitListener(tip)
    }
  })

  document.querySelector('.spotlight__content').addEventListener('click', e => {
    if (e.target.classList.contains('tooltip')) {
      const virtualReference = {
        getBoundingClientRect() {
          const rect = e.target.getBoundingClientRect()

          return {
            top: rect.top - 64,
            right: rect.right,
            bottom: rect.bottom - 64,
            left: rect.left,
            width: rect.width,
            height: rect.height,
            x: rect.x,
            y: rect.y - 64
          }
        },
        clientHeight: window.innerHeight,
        clientWidth: window.innerWidth
      }

      tippy(virtualReference, { content: formatContent(e.target.dataset) })
    }
  })
}

const formatContent = reference => {
  let content = JSON.parse(reference.content)
  let title = `<div class="tooltipped__title">${content.title}</div>`
  let entry = `<div class="tooltipped__entry">${content.entry}</div>`

  let textContent = Breakpoints.isMobile()
    ? `<div class="tooltipped"><i class="icon-x"></i>${title}${entry}</div>`
    : `<div class="tooltipped">${entry}</div>`

  return textContent
}

const exitListener = tip => {
  let close = document.querySelector('.tooltipped .icon-close')

  if (!close) return
  close.addEventListener('click', () => {
    tip.hide()
  })
}

export default Tippy
