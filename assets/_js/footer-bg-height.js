const CalcHeight = el => {
  const height =
    document.documentElement.scrollHeight - el.offsetTop - el.offsetHeight

  document.documentElement.style.setProperty(
    '--footer-bg-min-height',
    height + 'px'
  )
}

const FooterBgHeight = () => {
  const el = document.querySelector('.js-footer-bg')

  if (!el) {
    return
  }

  CalcHeight(el)

  window.addEventListener('resize', () => {
    CalcHeight(el)
  })
}

export default FooterBgHeight
