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
      document.getElementById('sc_slide0').classList.add('is-active')
    },
    s1() {
      console.log('step 1')
      document.getElementById('sc_slide1').classList.add('is-active')
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

      // months.forEach((month, i) => {
      //   document.getElementById('sc_' + month + '18').classList.add('is-active')

      //   if (i > 0) {
      //     const prevMonth = months[i - 1]
      //     document
      //       .getElementById('sc_' + prevMonth + '18')
      //       .classList.remove('is-active')
      //   }
      // })
      return
    },
    s2() {
      console.log('step 2')
      return
    },
    s3() {
      console.log('step 3')
    },
    s4() {
      console.log('step 4')
    },
    s5() {
      console.log('step 5')
    }
  }

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
        stepActions['s' + step]()
      })
      .on('leave', function(event) {
        let nextStep = Math.max(0, step - 1)
        stepActions['s' + nextStep]()
      })
    scene.addTo(controller)
  })

  function setActiveStep(step) {
    console.log(step)
    let stepClassList = document.querySelector('#sc_slide' + step).classList

    if (stepClassList) {
      stepClassList.add('is-active')
    } else {
      document
        .querySelector('#sc_slide' + step)
        .setAttribute('class', 'slide is-active')
    }

    Array.from(
      document.querySelectorAll(
        '.arctic__map .slide:not(#sc_slide' + step + ')'
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
