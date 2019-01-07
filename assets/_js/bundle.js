import FooterBgHeight from './footer-bg-height'
import Header from './header'
import HeaderSearch from './header-search'
import Navigation from './header-nav'
import objectFitImages from 'object-fit-images'
import smoothScroll from './smooth-scroll'

window.addEventListener('DOMContentLoaded', () => {
  FooterBgHeight()
  Header()
  HeaderSearch()
  Navigation()
  objectFitImages()
  smoothScroll()
})
