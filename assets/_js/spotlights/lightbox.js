import scroll from '@threespot/freeze-scroll'
import { Luminous, LuminousGallery } from 'luminous-lightbox'

const Lightbox = () => {
  const galleryOpts = {
    // Whether pressing the arrow keys should move to the next/previous slide.
    arrowNavigation: true
  }

  const luminousOpts = {
    // Prefix for generated element class names (e.g. `my-ns` will
    // result in classes such as `my-ns-lightbox`. Default `lum-`
    // prefixed classes will always be added as well.
    namespace: null,
    // Which attribute to pull the lightbox image source from.
    sourceAttribute: 'src',
    // Captions can be a literal string, or a function that receives the Luminous instance's trigger element as an argument and returns a string. Supports HTML, so use caution when dealing with user input.
    caption: e => {
      if (e.parentNode.classList.contains('sc-single-image')) {
        const caption = e.parentNode.querySelector('figcaption').innerHTML

        return `<div class="img-caption">${caption}</div>`
      } else if (
        e.parentNode.classList.contains('sc-image-group__images-single')
      ) {
        const component = e.closest('.sc-image-group')

        const i = Array.from(component.querySelectorAll('img')).indexOf(e)

        const description = component.querySelectorAll(
          '.sc-image-group__caption-label'
        )[i].nextSibling

        const source = description.nextSibling

        const caption = `${description.textContent}${source.outerHTML}`

        return `<div class="img-caption">${caption}</div>`
      } else if (
        e.parentNode.classList.contains('sc-image-gallery__image-single')
      ) {
        const component = e.closest('.sc-image-gallery')

        const i = Array.from(component.querySelectorAll('img')).indexOf(e)

        const caption = component.querySelectorAll(
          '.sc-image-gallery__captions-single__text'
        )[i]

        caption
          .querySelector('span')
          .classList.remove('sc-image-gallery__captions-single__text-source')

        return `<div class="img-caption">${caption.innerHTML}</div>`
      }
    },
    // The event to listen to on the _trigger_ element: triggers opening.
    openTrigger: 'click',
    // The event to listen to on the _lightbox_ element: triggers closing.
    closeTrigger: 'click',
    // Allow closing by pressing escape.
    closeWithEscape: true,
    // Automatically close when the page is scrolled.
    closeOnScroll: false,
    // Disable close button
    showCloseButton: true,
    // A node to append the lightbox element to.
    appendToNode: document.body,
    // A selector defining what to append the lightbox element to.
    // This will take precedence over `appendToNode`.
    appendToSelector: null,
    // If present (and a function), this will be called
    // whenever the lightbox is opened.
    onOpen: () => scroll.freeze(),
    // If present (and a function), this will be called
    // whenever the lightbox is closed.
    onClose: () => scroll.unfreeze(),
    // When true, adds the `imgix-fluid` class to the `img`
    // inside the lightbox. See https://github.com/imgix/imgix.js
    // for more information.
    includeImgixJSClass: false,
    // Add base styles to the page. See the "Theming"
    // section of README.md for more information.
    injectBaseStyles: true
  }

  const scSingleImages = [...document.querySelectorAll('.sc-single-image img')]
  const scGroups = [...document.querySelectorAll('.sc-image-group')]
  const scGalleries = [...document.querySelectorAll('.sc-image-gallery')]
  const single_images = [...scSingleImages]
  const components = [...scGroups, ...scGalleries]

  single_images.forEach(img => {
    img.style.cursor = 'pointer'
    new Luminous(img, luminousOpts)
  })

  components.forEach(component => {
    const component_images = component.querySelectorAll('img')

    component_images.forEach(img => {
      img.style.cursor = 'pointer'
    })

    new LuminousGallery(component_images, galleryOpts, luminousOpts)
  })
}

export default Lightbox
