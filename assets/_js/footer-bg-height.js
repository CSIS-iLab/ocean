import Breakpoints from './breakpoints'

/**
 * Calculates the distance between an element and the bottom of the document.
 * @param {HTMLElement} el The element used to calculate the distance to the bottom of the document.
 */
const CalcHeight = el => {
  let height =
    document.documentElement.scrollHeight - el.offsetTop - el.offsetHeight

  if (Breakpoints.isMobile() || Breakpoints.calculate() === 'medium') {
    height -= document.querySelector('.site-footer').offsetHeight
  }

  // On single posts page, calculate from top of element instead of bottom.
  if (el.classList.contains('js-footer-bg-switch') && !Breakpoints.isMobile()) {
    height = height + el.offsetHeight
  }

  document.documentElement.style.setProperty(
    '--footer-bg-min-height',
    height + 'px'
  )
}

const FooterBgHeight = () => {
  const el = document.querySelector('.js-footer-bg')
  let breakpoint = Breakpoints.calculate()

  if (!el) {
    return
  }

  CalcHeight(el)

  window.addEventListener('resize', () => {
    let newBreakpoint = Breakpoints.calculate()
    if (breakpoint !== newBreakpoint) {
      breakpoint = newBreakpoint
      CalcHeight(el)
    } else if (newBreakpoint == 'large') {
      CalcHeight(el)
    }
  })
}

export default FooterBgHeight
