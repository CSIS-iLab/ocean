import Stickyfill from 'stickyfilljs'

const BackgroundTextScroll = () => {
  let scBTS__background = document.querySelector(
    '.sc-background-text-scroll__background'
  )
  if (scBTS__background) {
    Stickyfill.add(scBTS__background)
  }
}

export default BackgroundTextScroll
