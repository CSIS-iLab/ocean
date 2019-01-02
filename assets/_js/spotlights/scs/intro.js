import Breakpoints from '../../breakpoints'
import ScrollMagic from 'ScrollMagic'

const Intro = () => {
  const graphicEl = document.querySelector('.scs__intro')
  const videoEl = document.querySelector('.scs__intro-video')
  const videoPlayer = videoEl.querySelector('.scs__intro-video-player')
  const videoPlayerSource = videoPlayer.querySelector('source')
  const contentEl = document.querySelector('.spotlight__content')
  const triggerEls = Array.from(
    graphicEl.querySelectorAll('.scs__intro-trigger')
  )
  const stepNum = triggerEls.length
  const penultimate = triggerEls[stepNum - 2]
  const ultimate = triggerEls[stepNum - 1]
  let src = videoPlayer.getAttribute('data-src')

  console.log(stepNum)
  console.log(penultimate)
  console.log(ultimate)

  if (Breakpoints.isMobile()) {
    src = videoPlayer.getAttribute('data-src-mobile')
  }

  setTimeout(() => {
    videoPlayerSource.src = src
    videoPlayer.load()
    videoPlayer.play()
  }, 500)

  // init controller
  const controller = new ScrollMagic.Controller()

  new ScrollMagic.Scene({
    triggerElement: penultimate,
    triggerHook: 'onEnter'
  })
    .setClassToggle('.scs__intro-map', 'is-active')
    .addTo(controller)

  new ScrollMagic.Scene({
    triggerElement: contentEl,
    triggerHook: 'onEnter'
  })
    .on('enter', e => {
      videoEl.classList.remove('is-active')
      videoPlayer.pause()
    })
    .on('leave', e => {
      videoEl.classList.add('is-active')
      videoPlayer.play()
    })
    .addTo(controller)
}

export default Intro
