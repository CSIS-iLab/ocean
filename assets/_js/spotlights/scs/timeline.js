import ScrollMagic from 'scrollmagic'

const Timeline = () => {
  console.log('yes')
  let timelines = [...document.querySelectorAll('.scs-timeline')]
  let intervals = []

  timelines.forEach(timeline => {
    let interval,
      position = 0

    let graphicHeight = timeline.dataset.height
    let graphicWidth = timeline.dataset.width
    let graphicSteps = parseInt(timeline.dataset.steps, 10)

    let container = timeline.querySelector('.scs-timeline__scroll-container')

    let graphic = container.querySelector(
      '.scs-timeline__scroll-container__graphic'
    )

    container.style.paddingTop = `${(graphicHeight / graphicWidth) * 100.0}%`

    let tickContainer = timeline.querySelector(
      '.scs-timeline__indicator__progress-ticks'
    )

    let progressDisplay = timeline.querySelector(
      '.scs-timeline__indicator__progress-marker'
    )

    let startLabel = timeline.querySelector('.startDate')
    let endLabel = timeline.querySelector('.endDate')

    let startDate = new Date(startLabel.innerHTML)
    let endDate = new Date(endLabel.innerHTML)

    let labelContainer = timeline.querySelector(
      '.scs-timeline__indicator__progress-labels'
    )

    let monthDiff = endDate.getMonth() - startDate.getMonth()
    let yearDiff = endDate.getYear() - startDate.getYear()

    let diff = yearDiff * 12 + monthDiff

    let yearWidth = Math.ceil(100 / diff)

    let partialYearWidth = Math.ceil(
      ((endDate.getMonth() + 1) / 12) * 10 * yearWidth
    )
    Array.from(Array(diff)).forEach((x, i) => {
      let monthNum = Math.abs(startDate.getMonth() + i),
        newYear = i % 12 === 0,
        monthDate,
        yearNum,
        label

      if (newYear) {
        yearNum = Math.abs(startDate.getFullYear() + (i % 12))
      }

      if (yearNum) {
        monthDate = new Date(yearNum, monthNum, 1)

        label = monthDate.toLocaleDateString('en-US', {
          year: 'numeric'
        })

        if (i === yearDiff * 12) {
          labelContainer.innerHTML += `<div class="label" style="flex-basis:${partialYearWidth}%">${label}</div>`

          tickContainer.innerHTML += `<div class="tick" style="flex-basis:${partialYearWidth}%"> </div>`
        } else if (startDate.getMonth() !== 0 && i === 0) {
          labelContainer.innerHTML += `<div class="label" style="flex-basis:${partialYearWidth}%"> </div>`

          tickContainer.innerHTML += `<div class="tick" style="flex-basis:${partialYearWidth}%"> </div>`
        } else if (startDate.getMonth() === 0 && i === 0) {
          labelContainer.innerHTML += `<div class="label" style="flex-basis: ${yearWidth *
            12}%"></div>`

          tickContainer.innerHTML += `<div class="tick" style="flex-basis: ${yearWidth *
            12}%"> </div>`
        } else {
          labelContainer.innerHTML += `<div class="label" style="flex-basis: ${yearWidth *
            12}%">${label}</div>`

          tickContainer.innerHTML += `<div class="tick" style="flex-basis: ${yearWidth *
            12}%"> </div>`
        }
      }
    })

    let controller = new ScrollMagic.Controller()

    let scene = new ScrollMagic.Scene({
      offset: 0,
      triggerElement: '.scs-timeline'
    })
      .addTo(controller)
      .on('enter', e => start())

    const update = () => {
      position++

      if (graphicSteps === position) {
        clearInterval(interval)
        return
      }

      let positionPercentage = (100.0 / (graphicSteps - 1)) * position

      graphic.style.backgroundPositionY = `${positionPercentage}%`

      progressDisplay.style.width = `${positionPercentage}%`
    }

    const start = () => {
      position = 0
      intervals.forEach(clearInterval)
      interval = setInterval(update, 750)
      intervals.push(interval)
    }

    timeline
      .querySelector('.scs-timeline button')
      .addEventListener('click', start)
  })
}

export default Timeline
