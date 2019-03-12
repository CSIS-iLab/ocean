import Breakpoints from '../../breakpoints'
import ScrollMagic from 'ScrollMagic'
import Stickyfill from 'stickyfilljs'

const Map = () => {
  Stickyfill.add(document.querySelector('.arctic__map-map'))

  const graphicEl = document.querySelector('.arctic__map')
  const triggerEls = Array.from(
    graphicEl.querySelectorAll('.arctic__map-trigger')
  )
  const labelEl = document.querySelector('.arctic__legend-curr')

  const stepActions = {
    s0() {
      console.log('step 0')
      document.getElementById('sc_jan18').classList.add('is-active')
      labelEl.innerHTML = 'January'
      document.getElementById('sc_slide1').classList.remove('is-active')
    },
    s1() {
      console.log('step 1')
      document.getElementById('sc_slide1').classList.add('is-active')
      document.getElementById('sc_dec18').classList.remove('is-active')
      const months = {
        jan: 'January',
        feb: 'February',
        mar: 'March',
        apr: 'April',
        may: 'May',
        jun: 'June',
        jul: 'July',
        aug: 'August',
        sep: 'September',
        oct: 'October',
        nov: 'November',
        dec: 'December'
      }

      const months_short = Object.keys(months)

      const interval = 750 // how much time should the delay between two iterations be (in milliseconds)?
      let promise = Promise.resolve()
      months_short.forEach((month, i) => {
        promise = promise.then(function() {
          document
            .getElementById('sc_' + month + '18')
            .classList.add('is-active')
          labelEl.innerHTML = months[month]

          if (i == 0) {
            return
          }

          const prevMonth = months_short[i - 1]
          document
            .getElementById('sc_' + prevMonth + '18')
            .classList.remove('is-active')

          return new Promise(resolve => {
            setTimeout(resolve, interval)
          })
        })
      })

      // promise.then(function() {
      //   console.log('Loop finished.')
      // })

      return
    },
    s2() {
      console.log('step 2: Need March AV line')
      document.getElementById('sc_mar18').classList.add('is-active')
      labelEl.innerHTML = 'March'
      document.getElementById('sc_dec18').classList.remove('is-active')
      document.getElementById('sc_slide4').classList.remove('is-active')
      return
    },
    s3() {
      console.log('step 3')
      document.getElementById('sc_mar18').classList.add('is-active')
      labelEl.innerHTML = 'March'
      document.getElementById('sc_slide4').classList.add('is-active')
      document.getElementById('sc_slide5').classList.remove('is-active')
      document.getElementById('sc_sep18').classList.remove('is-active')
    },
    s4() {
      console.log('step 4')
      document.getElementById('sc_slide5').classList.add('is-active')
      document.getElementById('sc_sep18').classList.add('is-active')
      labelEl.innerHTML = 'September'
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
      triggerHook: 0.8
    })

    scene
      .on('enter', function(event) {
        stepActions['s' + step]()
      })
      .on('leave', function(event) {
        let prevStep = Math.max(0, step - 1)
        stepActions['s' + prevStep]()
      })
    scene.addTo(controller)
  })
}

export default Map
