const Explainer = () => {
  const triggers = [...document.querySelectorAll('.explainer__trigger')]

  triggers.forEach(trigger => {
    let parent = trigger.parentNode

    trigger.addEventListener('click', function() {
      let explainers = [...document.querySelectorAll('.explainer')]
      explainers.forEach(explainer => explainer.classList.remove('is-active'))

      if (parent.classList.contains('is-active')) {
        this.setAttribute('aria-expanded', 'false')
        this.parentNode.classList.remove('is-active')
      } else {
        this.setAttribute('aria-expanded', 'true')
        this.parentNode.classList.add('is-active')
      }
    })
  })

  let exits = [...document.querySelectorAll('.icon-x')]

  exits.forEach(exit => {
    exit.addEventListener('click', () =>
      exit.parentNode.parentNode.classList.remove('is-active')
    )
  })
}

export default Explainer
