import Flickity from 'flickity'
require('flickity-imagesloaded')

const ImageGallery = () => {
  let galleries = Array.from(
    document.querySelectorAll('.sc-image-gallery__images')
  )

  galleries.forEach(gallery => {
    let captions = Array.from(
      gallery.parentNode.querySelectorAll('.sc-image-gallery__captions-single')
    )

    let image_gallery_images = new Flickity(gallery, {
      cellAlign: 'center',
      pageDots: false,
      prevNextButtons: true,
      wrapAround: true,
      dragThreshold: 20,
      lazyLoad: 5,
      imagesLoaded: true,
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
