import Breakpoints from '../../breakpoints'
import ScrollMagic from 'ScrollMagic'
import Stickyfill from 'stickyfilljs'

const Map = () => {
  Stickyfill.add(document.querySelector('.scs__map-map'))

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
    document.querySelector('#scsmap__slide' + step).classList.add('is-active')

    document
      .querySelectorAll('.slide:not(#scsmap__slide' + step + ')')
      .forEach(el => {
        //console.log(el)
        el.classList.remove('is-active')
      })
  }
}

export default Map
