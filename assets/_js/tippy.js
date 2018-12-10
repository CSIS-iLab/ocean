import tippy from 'tippy.js'
import Breakpoints from './breakpoints'

const Tippy = () => {
  tippy('.tooltip', {
    theme: 'light',
    arrow: Breakpoints.isMobile() ? false : true,
    hideOnClick: true,
    interactive: false, //errors if true
    trigger: 'click',
    onMount(tip) {
      formatContent(tip)
      exitListener(tip)
    }
  })
}

const formatContent = tip => {
  let content = JSON.parse(tip.reference.dataset.content)
  let title = `<div class="tooltipped__title">${content.title}</div>`
  let entry = `<div class="tooltipped__entry">${content.entry}</div>`

  let textContent = Breakpoints.isMobile()
    ? `<div class="tooltipped"><i class="icon-x"></i>${title}${entry}</div>`
    : `<div class="tooltipped">${entry}</div>`

  tip.setContent(textContent)
}

const exitListener = tip => {
  let close = document.querySelector('.tooltipped .icon-close')

  if (!close) return
  close.addEventListener('click', () => {
    tip.hide()
  })
}

export default Tippy
