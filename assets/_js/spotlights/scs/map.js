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
    let stepClassList = document.querySelector('#scsmap__slide' + step)
      .classList

    if (stepClassList) {
      stepClassList.add('is-active')
    } else {
      document
        .querySelector('#scsmap__slide' + step)
        .setAttribute('class', 'slide is-active')
    }

    Array.from(
      document.querySelectorAll(
        '.scs__map .slide:not(#scsmap__slide' + step + ')'
      )
    ).forEach(el => {
      let elClassList = el.classList

      if (elClassList) {
        elClassList.remove('is-active')
      } else {
        el.setAttribute('class', 'slide')
      }
    })
  }
}

export default Map
