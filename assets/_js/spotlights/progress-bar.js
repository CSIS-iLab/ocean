const ProgressBar = () => {
  const h = document.documentElement
  const b = document.body
  const st = 'scrollTop'
  const sh = 'scrollHeight'
  const client_height =
    h.clientHeight +
    document.querySelector('.spotlight__footer').clientHeight +
    document.querySelector('.site-footer').clientHeight +
    100
  const header = document.querySelector('.site-header')
  let scroll

  document.addEventListener('scroll', function() {
    scroll = ((h[st] || b[st]) / ((h[sh] || b[sh]) - client_height)) * 100
    header.style.setProperty('--scroll-progress', scroll + '%')
  })
}

export default ProgressBar
