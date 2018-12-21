// import { water_front, water_bg } from './waves'
import { water_bg, water_front } from './waves'
import { TweenMax, ScrollToPlugin, TimelineMax, Sine } from 'gsap/all'
import PixiPlugin from 'gsap/PixiPlugin'
import ScrollMagic from 'ScrollMagic'
import 'animation.gsap'

let windowDur = 1
const vTl = new TimelineMax(),
  vT2 = new TimelineMax(),
  vT3 = new TimelineMax(),
  vT4 = new TimelineMax(),
  vT5 = new TimelineMax(),
  tl = new TimelineMax()
let waterID = document.getElementById('water').offsetHeight
const waterY = waterID + 100
vTl
  .from(water_front, 5, { pixi: { alpha: 0, positionY: waterY }, delay: 4 }, 0)
  .to('#clouds_1', 5, { y: '20' }, 0)
  .to('#clouds_2', 5, { y: '15' }, '-=4')
vT2.to('#turbwave', 4, { attr: { baseFrequency: 0.0 } }, 0)
window.addEventListener('load', function() {
  let ctrl = new ScrollMagic.Controller({
    globalSceneOptions: {}
  })
  vT5.to('#sky', 4, { y: '20%' }, 0)
  vT4.staggerFromTo(
    '#protect span',
    0.7,
    {
      transform: 'matrix(1.1, 0.2, 0.2, 0.8, -20, -00)',
      autoAlpha: 0,
      webKitFilter: 'blur(5px)',
      filter: 'blur(5px)',
      x: -80,
      rotation: 0.01
    },
    {
      autoAlpha: 1,
      webKitFilter: 'blur(0px)',
      filter: 'blur(0px)',
      x: 0,
      rotation: 0.01,
      transform: 'matrix(1, 0, 0, 1, 0, 1)'
    },
    0.1
  )
  new ScrollMagic.Scene({
    triggerHook: 'onEnter',
    triggerElement: '#hero_bottom',
    duration: '100%',
    offset: 10
  })
    .addTo(ctrl)
    .setTween(vT5)
  // set pin
  new ScrollMagic.Scene({
    triggerHook: 'onLeave',
    triggerElement: '#hero_top',
    duration: '20%',
    offset: 10
  })
    .setPin('#hero_top')
    .setTween(vTl)
    .addTo(ctrl)
    .setClassToggle('#home-scroll-container', 'active')
    .on('progress', function(e) {
      document
        .getElementById('water')
        .setAttribute('data-per', e.progress.toFixed(3))
      water_bg.update()
    })
    .on('leave', function(event) {
      if (event.scrollDirection == 'FORWARD') {
        vT2.restart()
        TweenMax.to(window, windowDur, {
          scrollTo: {
            y: '#hero_bottom',
            autoKill: false,
            offsetY: -50
          },
          ease: Sine.easeOut
        })
        TweenMax.to('#protect', 1, { y: '300%', rotation: 0.001 })
        document.getElementById('home-scroll-container').classList.add('active')
        TweenMax.to('#hero_top', 1, { y: '35%', rotation: 0.001 }, '-=4')
      } else {
        vT2.stop()
        document
          .getElementById('home-scroll-container')
          .classList.remove('active')
      }
    })
  // scene;
  new ScrollMagic.Scene({
    triggerElement: '#water',
    triggerHook: 'onLeave',
    offset: 5 // small offset added to prevent overscrolling accidentally triggering
  })
    .addTo(ctrl)
    .setClassToggle('#preserve-svg', 'pactive')
    .setTween(vT3)
  new ScrollMagic.Scene({
    triggerElement: '#hero_bottom',
    triggerHook: 'onLeave',
    offset: -40,
    reverse: true // small offset added to prevent overscrolling accidentally triggering
  })
    .addTo(ctrl)
    //.setTween(vT3)
    .on('leave', function(event) {
      vT2.stop()
      document.getElementById('preserve-svg').classList.remove('pactive')
      document
        .getElementById('home-scroll-container')
        .classList.remove('active')
      if (event.scrollDirection == 'REVERSE') {
        TweenMax.to(window, windowDur, {
          scrollTo: {
            y: 0,
            autoKill: false
          },
          ease: Sine.easeOut
        })
        TweenMax.to('#hero_top', 1, { y: '0%', rotation: 0.001 })
        TweenMax.to('#protect', 1, { y: '0%', rotation: 0.001 })
      }
    })
    .on('start', function(event) {
      //$("#preserve-svg").removeClass("pover");
    }) // scene end
}) //window onload
