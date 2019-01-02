import ScrollMagic from 'scrollmagic'

const Timeline = () => {
  const timelines = [...document.querySelectorAll('.scs-timeline')]
  let intervals = []

  timelines.forEach(timeline => {
    let interval, position

    const graphicID = timeline.getAttribute('id')
    const graphicHeight = timeline.dataset.height
    const graphicWidth = timeline.dataset.width
    const graphicSteps = parseInt(timeline.dataset.steps, 10)

    const container = timeline.querySelector('.scs-timeline__scroll-container')

    const graphic = container.querySelector(
      '.scs-timeline__scroll-container__graphic'
    )

    container.style.paddingTop = `${(graphicHeight / graphicWidth) * 100.0}%`

    const tickContainer = timeline.querySelector(
      '.scs-timeline__indicator__progress-ticks'
    )

    const progressDisplay = timeline.querySelector(
      '.scs-timeline__indicator__progress-marker'
    )

    const startLabel = timeline.querySelector('.startDate')
    const endLabel = timeline.querySelector('.endDate')

    const startDate = new Date(startLabel.innerHTML)
    const endDate = new Date(endLabel.innerHTML)

    const labelContainer = timeline.querySelector(
      '.scs-timeline__indicator__progress-labels'
    )

    const monthDiff = endDate.getMonth() - startDate.getMonth()
    const yearDiff = endDate.getYear() - startDate.getYear()

    const diff = yearDiff * 12 + monthDiff

    const yearWidth = Math.ceil(100 / diff)

    const partialYearWidth = Math.ceil(
      ((endDate.getMonth() + 1) / 12) * 10 * yearWidth
    )
    Array.from(Array(diff)).forEach((x, i) => {
      let monthNum = Math.abs(startDate.getMonth() + i)
      let newYear = i % 12 === 0

      let yearNum, label

      if (newYear) {
        yearNum = Math.abs(startDate.getFullYear() + (i % 12))
      }

      if (yearNum) {
        const monthDate = new Date(yearNum, monthNum, 1)

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

    const update = () => {
      position++

      if (graphicSteps === position) {
        clearInterval(interval)
        return
      }

      const positionPercentage = (100.0 / (graphicSteps - 1)) * position

      graphic.style.backgroundPositionY = `${positionPercentage}%`

      progressDisplay.style.width = `${positionPercentage}%`
    }

    const start = () => {
      position = 0
      intervals.forEach(clearInterval)
      intervals = []
      interval = setInterval(update, 750)
      intervals.push(interval)
    }

    let controller = new ScrollMagic.Controller()

    const scene = new ScrollMagic.Scene({
      offset: 0,
      triggerElement: '#' + graphicID
    })
      .addTo(controller)
      .on('enter', start)

    timeline
      .querySelector('.scs-timeline button')
      .addEventListener('click', start)
  })
}

export default Timeline
