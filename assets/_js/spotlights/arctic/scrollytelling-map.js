import IceSelector from './scrollytelling-ice-selector'
import Selector from './scrollytelling-selector'
import ScrollMagic from 'ScrollMagic'
import Stickyfill from 'stickyfilljs'

const Map = () => {
  IceSelector.setListener()
  Selector.setListener()
  Stickyfill.add(document.querySelector('.arctic__map-map'))

  const graphicEl = document.querySelector('.arctic__map')
  const triggerEls = Array.from(
    graphicEl.querySelectorAll('.arctic__map-trigger')
  )
  const descEl = document.querySelector('.arctic__legend-desc')
  const medianLegendEl = document.querySelector('.arctic__legend-key--median')

  const interval = 750
  const text = {
    s0: 'Watch the ice extent grow and diminish throughout 2018.',
    s1:
      'Choose a month from the dropdown above to view the ice extent on the map.',
    s2: 'The ice extent reaches its maximum in late winter.',
    s3: 'Click on labels below to toggle layers on map.',
    s4: 'The ice extent reaches its minimum in late summer.'
  }

  let monthsTimer
  let yearTimer

  const stepActions = {
    s0() {
      clearTimeout(monthsTimer)
      Selector.setValue('jan')
      document.getElementById('sc_slide1').classList.remove('is-active')
      descEl.innerHTML = text['s0']
    },
    s1() {
      document.getElementById('sc_slide1').classList.add('is-active')
      descEl.innerHTML = text['s0']
      document.getElementById('sc_slide2').classList.remove('is-active')
      medianLegendEl.classList.remove('is-active')

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
        Selector.setValue(month)

        if (counter === monthsShort.length - 1) {
          Selector.toggleDisabledStatus(false)
          descEl.innerHTML = text['s1']
          clearTimeout(monthsTimer)
          return
        }

        counter++
        monthsTimer = setTimeout(tick, interval)
      }, interval)

      return
    },
    s2() {
      clearTimeout(monthsTimer)
      clearTimeout(yearTimer)
      Selector.toggleDisabledStatus(true)
      Selector.setValue('mar')
      document.getElementById('sc_slide2').classList.add('is-active')
      document.getElementById('sc_mar18-av').classList.add('is-active')
      medianLegendEl.classList.add('is-active')
      descEl.innerHTML = text['s2']

      document.getElementById('sc_mar17-av').classList.remove('is-active')
      document.getElementById('sc_mar16-av').classList.remove('is-active')
      document.getElementById('sc_mar15-av').classList.remove('is-active')
      document.getElementById('sc_slide3').classList.remove('is-active')
      IceSelector.toggleCheckedStatus(true)
      IceSelector.toggleVisibility('remove')
      IceSelector.toggleDisabledStatus(true)
      return
    },
    s3() {
      Selector.setValue('mar')
      document.getElementById('sc_slide2').classList.add('is-active')
      document.getElementById('sc_slide3').classList.remove('is-active')
      descEl.innerHTML = text['s2']

      IceSelector.toggleVisibility('add')

      const years = ['17', '16', '15']

      let counter = 0
      yearTimer = setTimeout(function tick() {
        let year = years[counter]
        document
          .getElementById('sc_mar' + year + '-av')
          .classList.add('is-active')

        if (counter === years.length - 1) {
          descEl.innerHTML = text['s3']
          clearTimeout(yearTimer)

          IceSelector.toggleDisabledStatus(false)

          return
        }

        counter++
        yearTimer = setTimeout(tick, interval)
      }, interval)
      return
    },
    s4() {
      clearTimeout(yearTimer)
      document.getElementById('sc_slide3').classList.add('is-active')
      Selector.setValue('sep')
      document.getElementById('sc_slide2').classList.remove('is-active')
      IceSelector.toggleVisibility('remove')
      descEl.innerHTML = text['s4']
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
