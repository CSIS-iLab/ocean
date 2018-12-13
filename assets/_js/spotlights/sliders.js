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
    nav: false,
    autoWidth: true
  })

  const caption_slider = tns({
    container: '.image-gallery__captions',
    controls: false,
    items: 1,
    center: true,
    edgePadding: Breakpoints.isMobile() ? 0 : 105,
    nav: false,
    autoWidth: true
  })

  let index = 0

  image_slider.events.on('indexChanged', slider => {
    let max = slider.slideCountNew - slider.cloneCount
    index = slider.index

    if (slider.index >= index) {
      if (slider.index !== slider.slideCountNew - 2) {
        caption_slider.goTo('next')
      }

      index = slider.index
    } else if (slider.index < index) {
      caption_slider.goTo('prev')
      index = slider.index
    }

    let label = document.querySelector(
      '.tns-slide-active .image-gallery__caption-label'
    )

    label.innerHTML = `${slider.displayIndex} of ${slider.slideCount}`
  })
}

export default Sliders
