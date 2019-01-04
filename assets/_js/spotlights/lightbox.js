import { Luminous } from 'luminous-lightbox'

const Lightbox = () => {
  const options = {
    // Prefix for generated element class names (e.g. `my-ns` will
    // result in classes such as `my-ns-lightbox`. Default `lum-`
    // prefixed classes will always be added as well.
    namespace: null,
    // Which attribute to pull the lightbox image source from.
    sourceAttribute: 'src',
    // Captions can be a literal string, or a function that receives the Luminous instance's trigger element as an argument and returns a string. Supports HTML, so use caution when dealing with user input.
    caption: e => {
      if (e.parentNode.classList.contains('sc-single-image')) {
        const caption = e.parentNode.querySelector('figcaption').outerHTML
        return caption
      } else if (
        e.parentNode.classList.contains('sc-image-group__images-single')
      ) {
        const figure = e.parentNode
        const i = Array.from(figure.parentNode.children).indexOf(figure)
        const component = figure.parentNode.parentNode
        const description = component.querySelectorAll(
          '.sc-image-group__caption-label'
        )[i].nextSibling
        const source = description.nextSibling
        const caption = `${description.textContent}${source.outerHTML}`
        return `<figcaption class="img-caption">${caption}</figcaption>`
      } else if (
        e.parentNode.classList.contains('sc-image-gallery__image-single')
      ) {
        const component = e.closest('.sc-image-gallery')
        const caption = component.querySelector(
          '.active .sc-image-gallery__captions-single__text'
        ).outerHTML
        return `<div class="sc-image-gallery__captions-single active">${caption}</div>`
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
    onOpen: null,
    // If present (and a function), this will be called
    // whenever the lightbox is closed.
    onClose: null,
    // When true, adds the `imgix-fluid` class to the `img`
    // inside the lightbox. See https://github.com/imgix/imgix.js
    // for more information.
    includeImgixJSClass: false,
    // Add base styles to the page. See the "Theming"
    // section of README.md for more information.
    injectBaseStyles: true
  }

  const scSingleImages = [...document.querySelectorAll('.sc-single-image img')]
  const scGroupImages = [...document.querySelectorAll('.sc-image-group img')]
  const scGalleryImages = [
    ...document.querySelectorAll('.sc-image-gallery img')
  ]
  const images = [...scSingleImages, ...scGroupImages, ...scGalleryImages]

  images.forEach(img => new Luminous(img, options))
}

export default Lightbox
