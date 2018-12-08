const ProgressBar = () => {
  let h = document.documentElement,
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight',
    header = document.querySelector('.site-header'),
    content_height = document.querySelector('.post__content').clientHeight,
    scroll

  document.addEventListener('scroll', function() {
    scroll = ((h[st] || b[st]) / ((h[sh] || b[sh]) - content_height)) * 100
    header.style.setProperty('--scroll-progress', scroll + '%')
  })
}

export default ProgressBar
