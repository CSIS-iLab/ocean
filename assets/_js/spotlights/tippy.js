import tippy from 'tippy.js'
import Breakpoints from '../breakpoints'

const Tippy = () => {
  document.querySelector('.spotlight__content').addEventListener('click', e => {
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

    if (e.target.classList.contains('tooltip')) {
      tippy.setDefaults({
        theme: 'light',
        maxWidth: Breakpoints.isMobile() ? '' : '350px',
        arrow: Breakpoints.isMobile() ? false : true,
        hideOnClick: true,
        interactive: false,
        trigger: 'click',
        showOnInit: true,
        onMount(tip) {
          exitListener(tip)
        }
      })

      tippy(virtualReference, { content: formatContent(e.target.dataset) })
    } else if (e.target.classList.contains('sc-tooltip-video__btn')) {
      tippy.setDefaults({
        theme: 'light',
        maxWidth: Breakpoints.isMobile() ? '' : '700px',
        arrow: false,
        hideOnClick: true,
        interactive: true,
        trigger: 'click',
        showOnInit: true,
        onMount(tip) {
          exitListener(tip)
        }
      })

      tippy(virtualReference, { content: formatContent(e.target.dataset) })
    }
  })
}

const formatContent = reference => {
  let entry,
    title,
    content = JSON.parse(reference.content)

  if (content.entry) {
    title = `<div class="tooltipped__title">${content.title}</div>`
    entry = `<div class="tooltipped__entry">${content.entry}</div>`
  }

  if (content.video) {
    entry = `<div class="tooltipped__entry">  <iframe src="${
      content.video
    }?title=0&byline=0&portrait=0" ${
      Breakpoints.isMobile()
        ? `width="100%" style="height:50vw; margin-top: 0.5rem;"`
        : `width="640px" height="360px"`
    }frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>`
  }

  let textContent =
    Breakpoints.isMobile() && title
      ? `<div class="tooltipped"><i class="icon-x"></i>${title}${entry}</div>`
      : Breakpoints.isMobile()
        ? `<div class="tooltipped"><i class="icon-x"></i>${entry}</div>`
        : `<div class="tooltipped">${entry}</div>`

  return textContent
}

const exitListener = tip => {
  let close = document.querySelector('.tooltipped .icon-x')

  if (!close) return
  close.addEventListener('click', () => {
    tip.hide()
  })
}

export default Tippy
