import Flickity from 'flickity'
import Breakpoints from '../breakpoints'

const ImageGallery = () => {
  let galleries = [...document.querySelectorAll('.sc-image-gallery__images')]

  galleries.forEach(gallery => {
    let captions = [
      ...gallery.parentNode.querySelectorAll(
        '.sc-image-gallery__captions-single'
      )
    ]

    let image_gallery_images = new Flickity(gallery, {
      cellAlign: 'center',
      pageDots: false,
      prevNextButtons: true,
      wrapAround: true,
      dragThreshold: 20,
      lazyLoad: 2,
      on: {
        ready: () => {
          captions[0].classList.add('active')
        },
        change: imageIndex => {
          captions.forEach((caption, captionIndex) => {
            if (imageIndex === captionIndex) {
              captions[captionIndex].classList.add('active')
            } else {
              captions[captionIndex].classList.remove('active')
            }
          })
        }
      }
    })
  })
}

export default ImageGallery
