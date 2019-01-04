import Breakpoints from '../../breakpoints'
import ScrollMagic from 'ScrollMagic'

const Map = () => {
  const graphicEl = document.querySelector('.scs__map')
  const triggerEls = Array.from(graphicEl.querySelectorAll('.scs__map-trigger'))

  // init controller
  const controller = new ScrollMagic.Controller()

  let scenes = triggerEls.map(function(el) {
    let step = +el.getAttribute('data-step')

    let scene = new ScrollMagic.Scene({
      triggerElement: el,
      triggerHook: 'onEnter'
    })

    scene
      .on('enter', function(event) {
        setActiveStep(step)
      })
      .on('leave', function(event) {
        let nextStep = Math.max(0, step - 1)
        setActiveStep(nextStep)
      })
    scene.addTo(controller)
  })

  function setActiveStep(step) {
    document.querySelector('#slide' + step).classList.add('is-active')

    document.querySelectorAll('.slide:not(#slide' + step + ')').forEach(el => {
      el.classList.remove('is-active')
    })
  }
}

export default Map
