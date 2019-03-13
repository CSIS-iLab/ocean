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

  const interval = 750

  let monthsTimer
  let yearTimer

  const stepActions = {
    s0() {
      clearTimeout(monthsTimer)
      document.getElementById('sc_jan18').classList.add('is-active')
      labelEl.innerHTML = 'January'
      document.getElementById('sc_slide1').classList.remove('is-active')
    },
    s1() {
      document.getElementById('sc_slide1').classList.add('is-active')
      document.getElementById('sc_dec18').classList.remove('is-active')
      document.getElementById('sc_mar18').classList.remove('is-active')
      document.getElementById('sc_slide2').classList.remove('is-active')
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

      const monthsShort = Object.keys(months)

      let counter = 0
      monthsTimer = setTimeout(function tick() {
        let month = monthsShort[counter]
        document.getElementById('sc_' + month + '18').classList.add('is-active')
        labelEl.innerHTML = months[month]

        if (counter > 0) {
          const prevMonth = monthsShort[counter - 1]
          document
            .getElementById('sc_' + prevMonth + '18')
            .classList.remove('is-active')
        }

        if (counter === monthsShort.length - 1) {
          clearTimeout(monthsTimer)
          return
        }

        counter++
        monthsTimer = setTimeout(tick, interval) // (*)
      }, interval)

      return
    },
    s2() {
      clearTimeout(monthsTimer)
      clearTimeout(yearTimer)
      document.getElementById('sc_mar18').classList.add('is-active')
      document.getElementById('sc_slide2').classList.add('is-active')
      document.getElementById('sc_mar18-av').classList.add('is-active')
      labelEl.innerHTML = 'March'
      document.getElementById('sc_dec18').classList.remove('is-active')
      document.getElementById('sc_slide3').classList.remove('is-active')
      return
    },
    s3() {
      document.getElementById('sc_mar18').classList.add('is-active')
      labelEl.innerHTML = 'March'
      document.getElementById('sc_slide2').classList.add('is-active')
      document.getElementById('sc_slide3').classList.remove('is-active')
      document.getElementById('sc_sep18').classList.remove('is-active')

      const years = ['18', '17', '16', '15']

      let counter = 0
      yearTimer = setTimeout(function tick() {
        let year = years[counter]
        document
          .getElementById('sc_mar' + year + '-av')
          .classList.add('is-active')

        if (counter === years.length - 1) {
          clearTimeout(yearTimer)
          return
        }

        counter++
        yearTimer = setTimeout(tick, interval) // (*)
      }, interval)
      return
    },
    s4() {
      clearTimeout(yearTimer)
      document.getElementById('sc_slide3').classList.add('is-active')
      document.getElementById('sc_sep18').classList.add('is-active')
      labelEl.innerHTML = 'September'
      document.getElementById('sc_mar18').classList.remove('is-active')
      document.getElementById('sc_slide2').classList.remove('is-active')
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
