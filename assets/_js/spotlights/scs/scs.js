import chartVessels from './chartVessels'
import chartCatch from './chartCatch'
import Intro from './intro'
import Map from './map'
import Timeline from './timeline'

window.addEventListener('DOMContentLoaded', () => {
  Intro()
  Map()
  Timeline()
})

chartVessels()
chartCatch()
