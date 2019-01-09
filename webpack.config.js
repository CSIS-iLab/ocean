module.exports = {
  mode: 'production',
  // devtool: 'source-map',
  // plugins: [new BundleAnalyzerPlugin()],
  output: {
    filename: chunkData => {
      return chunkData.chunk.entryModule._identifier.includes('spotlights/')
        ? 'spotlights/[name].js'
        : '[name].js'
    }
  },
  externals: {
    algoliasearch: 'algoliasearch',
    Flickity: 'flickity',
    LuminousLightbox: 'luminous-lightbox',
    'instantsearch.js/es': 'instantsearch',
    'pixi.js': 'PIXI',
    Plyr: 'plyr',
    objectFitImages: 'object-fit-images',
    objectFitVideos: 'object-fit-videos',
    ScrollMagic: 'ScrollMagic',
    SmoothScroll: 'smooth-scroll',
    Stickyfill: 'stickyfilljs',
    TimelineMax: 'TimelineMax',
    'tippy.js': 'tippy',
    TweenMax: 'TweenMax',
    Highcharts: 'Highcharts'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  resolve: {
    modules: ['node_modules'],
    alias: {
      TweenLite: 'gsap/src/minified/TweenLite.min.js',
      TweenMax: 'gsap/src/minified/TweenMax.min.js',
      TimelineLite: 'gsap/src/minified/TimelineLite.min.js',
      TimelineMax: 'gsap/src/minified/TimelineMax.min.js',
      ScrollMagic: 'scrollmagic/scrollmagic/minified/ScrollMagic.min.js',
      'animation.gsap':
        'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js'
    }
  }
}