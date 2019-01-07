import SmoothScroll from 'smooth-scroll'

const smoothScroll = () => {
  let scroll = new SmoothScroll('a[href*="#"]', {
    header: '.site-header',
    speed: 500
  })
}

export default smoothScroll
