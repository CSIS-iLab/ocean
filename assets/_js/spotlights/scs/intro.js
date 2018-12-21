import ScrollMagic from 'ScrollMagic'

const Intro = () => {
  const graphicEl = document.querySelector('.scs__intro')
  const triggerEls = Array.from(
    graphicEl.querySelectorAll('.scs__intro-trigger')
  )
  const stepNum = triggerEls.length
  // const penultimate = triggerEls[stepNum - 2]
  const ultimate = triggerEls[stepNum - 1]

  // init controller
  const controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onEnter'
    }
  })

  new ScrollMagic.Scene({
    triggerElement: ultimate
  })
    .setClassToggle('.scs__intro-map', 'is-active')
    .addTo(controller)
}

export default Intro
