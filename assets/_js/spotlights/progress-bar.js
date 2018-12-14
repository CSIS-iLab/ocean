const ProgressBar = () => {
  const h = document.documentElement
  const b = document.body
  const st = 'scrollTop'
  const sh = 'scrollHeight'
  const header = document.querySelector('.site-header')
  const content_height =
    document.querySelector('.spotlight__content').clientHeight - 100
  let scroll

  document.addEventListener('scroll', function() {
    scroll = ((h[st] || b[st]) / ((h[sh] || b[sh]) - content_height)) * 100
    header.style.setProperty('--scroll-progress', scroll + '%')
  })
}

export default ProgressBar
