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
    lazyload: true,
    mouseDrag: true,
    viewportMax: 630,
    nav: false,
    autoWidth: Breakpoints.isMobile() ? false : true,
    autoHeight: true,
    gutter: Breakpoints.isMobile() ? 16 : 32
  })

  const caption_slider = tns({
    container: '.image-gallery__captions',
    controls: false,
    items: 1,
    slideBy: 1,
    center: true,
    mouseDrag: true,
    nav: false,
    autoWidth: Breakpoints.isMobile() ? false : true,
    autoHeight: true,
    gutter: Breakpoints.isMobile() ? 16 : 32
  })

  let index = image_slider.getInfo().index
  let cachedIndex = image_slider.getInfo().index

  image_slider.events.on('indexChanged', slider => {
    if (slider.index >= index) {
      if (slider.index === cachedIndex + 1) {
        caption_slider.goTo('next')
      }
      cachedIndex = slider.index
      index = slider.index
    } else if (slider.index < index) {
      if (slider.index === cachedIndex - 1) {
        caption_slider.goTo('prev')
      }
      cachedIndex = slider.index
      index = slider.index
    }

    let labels = [
      ...document.querySelectorAll(
        '.tns-slide-active .image-gallery__caption-label'
      )
    ]

    labels.forEach((label, i) => {
      label.innerHTML = `${slider.displayIndex} of ${slider.slideCount}`
    })
  })
}

export default Sliders
