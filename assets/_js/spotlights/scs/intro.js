import ScrollMagic from 'ScrollMagic'

const Intro = () => {
  const graphicEl = document.querySelector('.scs__intro')
  const triggerEls = Array.from(
    graphicEl.querySelectorAll('.scs__intro-trigger')
  )
  const stepNum = triggerEls.length
  const penultimate = triggerEls[stepNum - 2]
  const ultimate = triggerEls[stepNum - 1]
  console.log(penultimate)
  console.log(ultimate)

  // init controller
  const controller = new ScrollMagic.Controller()

  new ScrollMagic.Scene({
    triggerElement: ultimate,
    triggerHook: 'onEnter'
  })
    .setClassToggle('.scs__intro-map', 'is-active')
    .addTo(controller)
}

export default Intro
