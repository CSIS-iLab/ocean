module.exports = {
  port: 4000,

  tasks: {
    browsersync: true,
    eslint: true,
    imagemin: true,
    sass: true,
    styleLint: true,
    watch: true,
    webpack: true
  },

  assets: './assets',

  browsersync: {
    browsers: [
      // "Google Chrome Canary",
      // "Google Chrome",
      // "Firefox Nightly",
      // "Firefox Developer Edition",
      // "Firefox",
      // "Safari Technology Preview",
      // "Safari",
      // "Opera",
      // "Opera Developer",
    ]
  },

  eslintLoader: {
    enforce: 'pre',
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'eslint-loader'
  },

  imagemin: {
    src: '_images',
    dest: 'images',
    progressive: true,
    svgoPlugins: [{ removeViewBox: false }]
  },

  jekyll: {
    config: {
      default: '_config.yml',
      development: '_config_development.yml',
      production: ''
    },
    dest: '_site',
    data: '_data',
    includes: '_includes',
    layouts: '_layouts',
    posts: '_posts'
  },

  js: {
    src: '_js',
    dest: 'js',
    entry: [
      'bundle.js',
      'spotlights.js',
      'archives.js',
      'home.js',
      'spotlights/arctic/arctic.js'
    ]
  },

  sass: {
    src: '_sass',
    dest: 'css',
    outputStyle: 'compressed',
    autoprefixer: {
      browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']
    }
  },

  webpack: {
    mode: 'production',
    // devtool: 'source-map',
    output: {
      filename: chunkData => {
        return chunkData.chunk.entryModule._identifier.includes('spotlights/')
          ? 'spotlights/[name].js'
          : '[name].js'
      }
    },
    externals: {
      'pixi.js': 'PIXI',
      ScrollMagic: 'ScrollMagic',
      TimelineMax: 'TimelineMax',
      TweenMax: 'TweenMax'
    },
    module: {
      rules: []
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
}
