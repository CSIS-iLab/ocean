import Map from './scrollytelling-map'
import TweenMax from 'TweenMax'
import TimelineMax from 'TimelineMax'
import ScrollMagic from 'ScrollMagic'

window.addEventListener('DOMContentLoaded', () => {
  Map()
  //console.log(TweenMax)

  const controller = new ScrollMagic.Controller({ loglevel: 3 })

  const animation = new TimelineMax()
  const animation2 = new TimelineMax()
  const animation3 = new TimelineMax()

  animation.set('#intro_eezs path', {
    attr: {
      'stroke-width': '0px',
      stroke: '#45546B'
    }
  })

  animation2.to('#arctic__intro-meta', 1, {
    y: '100%'
  })
  animation3.from('#spotlight__intro-p', 2, {
    y: '-50%'
  })
  animation
    .to('#intro_bgmap-blur', 2, {
      opacity: 1
    })
    .to(
      '#intro_eezs path',
      4,
      {
        attr: {
          'stroke-width': '170px',
          stroke: '#45546B'
        }
      },
      '-=2'
    )
    .to(
      '#arctic__intro-map feGaussianBlur',
      3,
      {
        attr: {
          stdDeviation: '15'
        }
      },
      '-=4'
    )

  const scene = new ScrollMagic.Scene({
    triggerHook: 'onCenter',
    triggerElement: '#arctic__intro-map',
    duration: '100%',
    offset: '50%'
  })
    .setTween(animation)
    .addTo(controller)
  //.setClassToggle('#intro_bgmap-blur', 'active')

  const scene2 = new ScrollMagic.Scene({
    triggerHook: 'onLeave',
    triggerElement: '#arctic__intro-metacontainer',
    duration: '100%'
  })
    .setTween(animation2)
    .addTo(controller)

  const scene3 = new ScrollMagic.Scene({
    triggerHook: 'onEnter',
    triggerElement: '#spotlight__intro-p',
    duration: '50%'
  })
    .setTween(animation3)
    .addTo(controller)
})
