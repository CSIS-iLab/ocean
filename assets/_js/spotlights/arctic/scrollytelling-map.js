import Breakpoints from '../../breakpoints'
import ScrollMagic from 'ScrollMagic'
import Stickyfill from 'stickyfilljs'

const Map = () => {
  Stickyfill.add(document.querySelector('.arctic__map-map'))

  const graphicEl = document.querySelector('.arctic__map')
  const triggerEls = Array.from(
    graphicEl.querySelectorAll('.arctic__map-trigger')
  )

  const stepActions = {
    s0() {
      console.log('step 0')
      document.getElementById('sc_jan18').classList.add('is-active')
      document.getElementById('sc_slide1').classList.remove('is-active')
    },
    s1() {
      console.log('step 1')
      document.getElementById('sc_slide1').classList.add('is-active')
      document.getElementById('sc_dec18').classList.remove('is-active')
      const months = [
        'jan',
        'feb',
        'mar',
        'apr',
        'may',
        'jun',
        'jul',
        'aug',
        'sep',
        'oct',
        'nov',
        'dec'
      ]

      const interval = 750 // how much time should the delay between two iterations be (in milliseconds)?
      let promise = Promise.resolve()
      months.forEach((month, i) => {
        promise = promise.then(function() {
          console.log(month)
          document
            .getElementById('sc_' + month + '18')
            .classList.add('is-active')

          if (i == 0) {
            return
          }

          const prevMonth = months[i - 1]
          document
            .getElementById('sc_' + prevMonth + '18')
            .classList.remove('is-active')

          return new Promise(resolve => {
            setTimeout(resolve, interval)
          })
        })
      })

      promise.then(function() {
        console.log('Loop finished.')
      })

      return
    },
    s2() {
      console.log('step 2: Need March AV line')
      document.getElementById('sc_mar18').classList.add('is-active')
      document.getElementById('sc_dec18').classList.remove('is-active')
      document.getElementById('sc_slide4').classList.remove('is-active')
      return
    },
    s3() {
      console.log('step 3')
      document.getElementById('sc_mar18').classList.add('is-active')
      document.getElementById('sc_slide4').classList.add('is-active')
      document.getElementById('sc_slide5').classList.remove('is-active')
      document.getElementById('sc_sep18').classList.remove('is-active')
    },
    s4() {
      console.log('step 4')
      document.getElementById('sc_slide5').classList.add('is-active')
      document.getElementById('sc_sep18').classList.add('is-active')
      document.getElementById('sc_mar18').classList.remove('is-active')
      document.getElementById('sc_slide4').classList.remove('is-active')
    }
  }

  // init controller
  const controller = new ScrollMagic.Controller()

  let scenes = triggerEls.map(function(el) {
    let step = +el.getAttribute('data-step')

    let scene = new ScrollMagic.Scene({
      triggerElement: el,
      triggerHook: 1
    })

    scene
      .on('enter', function(event) {
        console.log(event)
        stepActions['s' + step]()
      })
      .on('leave', function(event) {
        console.log('leave step:' + step)
        let prevStep = Math.max(0, step - 1)
        stepActions['s' + prevStep]()
      })
    scene.addTo(controller)
  })
}

export default Map
