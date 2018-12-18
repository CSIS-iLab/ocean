import ScrollMagic from 'scrollmagic'

const Timeline = () => {
  let timelines = [...document.querySelectorAll('.timeline')]
  let intervals = []

  timelines.forEach(timeline => {
    let progressPercent,
      count,
      top,
      interval,
      duration = 10000,
      rate = 12

    let tickContainer = timeline.querySelector(
      '.timeline__indicator__progress-ticks'
    )

    let progressDisplay = timeline.querySelector(
      '.timeline__indicator__progress-marker'
    )

    let graphic = timeline.querySelector('.timeline__graphic img')

    Array.from(Array(rate * 2)).forEach(i => {
      tickContainer.innerHTML += `<div class="tick" style="flex-basis: calc(100% / ${rate})"> </div>`
    })

    let controller = new ScrollMagic.Controller()

    let scene = new ScrollMagic.Scene({
      offset: 0,
      triggerElement: '.timeline'
    })
      .addTo(controller)
      .on('enter', e => start(duration))

    timeline.querySelector('.timeline button').addEventListener('click', () => {
      start(duration)
    })

    const start = i => {
      top = 0
      count = 1
      progressPercent = 0

      progressDisplay.style.left = `calc(${progressPercent}% - 0.3333rem)`
      graphic.style.top = `${top}px`

      intervals.forEach(clearInterval)
      interval = setInterval(() => update(i), duration / rate)
      intervals.push(interval)
    }

    const update = i => {
      progressPercent += i / rate / 100

      progressPercent = Math.min(progressPercent, 100)

      let imageHeight = -1 * graphic.offsetHeight

      if (count++ === rate + 1 || imageHeight > top) {
        clearInterval(interval)
      } else {
        top -= 404
        graphic.style.top = `${top}px`
      }
      progressDisplay.style.left = `calc(${progressPercent}% - 0.3333rem)`
    }
  })
}

export default Timeline
