const ContentTransition = () => {
  const elements = document.querySelectorAll('.js-transition--slide')

  let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('js-transition--active')
        observer.unobserve(entry.target)
      }
    })
  })

  elements.forEach(el => {
    observer.observe(el)
  })
}

export default ContentTransition
