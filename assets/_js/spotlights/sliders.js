import { tns } from 'tiny-slider'
import Breakpoints from '../breakpoints'

const Sliders = () => {
  const image_slider = tns({
    container: '.image-gallery__images',
    // controlsContainer: '.image-gallery__controls',
    controlsPosition: 'top',
    controlsText: [
      '<i class="icon-arrow-long_left"></i><span class="visually-hidden">previous</span>',
      '<i class="icon-arrow-long_right"></i><span class="visually-hidden">next</span>'
    ],
    items: 1,
    center: true,
    edgePadding: Breakpoints.isMobile() ? 0 : 105,
    lazyload: true,
    mouseDrag: true,
    nav: false
  })

  const caption_slider = tns({
    container: '.image-gallery__captions',
    controls: false,
    items: 1,
    center: true,
    edgePadding: Breakpoints.isMobile() ? 0 : 105,
    nav: false,
    animateNormal: 'false',
    animateIn: 'false',
    animateOut: 'false'
  })

  let index = 0

  image_slider.events.on('indexChanged', slider => {
    let max = slider.slideCountNew - slider.cloneCount

    if (slider.index > index && slider.index < max) {
      caption_slider.goTo('next')
      index = slider.index
    } else if (slider.index < index) {
      caption_slider.goTo('prev')
      index = slider.index
    } else if (slider.index == max) {
      index = 0
    }

    let label = document.querySelector(
      '.tns-slide-active .image-gallery__caption-label'
    )

    label.innerHTML = `${slider.displayIndex} of ${slider.slideCount}`
  })
}

export default Sliders
