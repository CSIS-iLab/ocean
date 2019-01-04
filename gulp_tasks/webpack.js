const argv = require('yargs').argv
const babel = require('gulp-babel')
const config = require('../frasco.config.js')
const gulp = require('gulp')
const named = require('vinyl-named')
const plumber = require('gulp-plumber')
const webpackStream = require('webpack-stream')
const webpack = require('webpack')

const entry = []
for (var i = 0; i <= config.js.entry.length - 1; i++) {
  entry.push(config.assets + '/' + config.js.src + '/' + config.js.entry[i])
}

if (config.tasks.eslint) config.webpack.module.rules.push(config.eslintLoader)

config.webpack.watch = argv.watch
config.webpack.mode = argv.mode || config.webpack.mode

gulp.task('webpack', function() {
  return gulp
    .src(entry)
    .pipe(plumber())
    .pipe(named())
    .pipe(
      babel({
        plugins: ['@babel/plugin-transform-runtime'],
        presets: [
          [
            '@babel/preset-env',
            {
              useBuiltIns: 'entry',
              debug: true,
              targets: {
                android: '4.2',
                chrome: '41',
                edge: '17',
                firefox: '52',
                ie: '11',
                ios: '9.3',
                opera: '56',
                safari: '10.1'
              }
            }
          ]
        ]
      })
    )
    .pipe(webpackStream(config.webpack, webpack))
    .pipe(gulp.dest(config.assets + '/' + config.js.dest))
})

// For internal use only
gulp.task('_webpack', function() {
  config.webpack.watch = config.tasks.watch
  gulp.start('webpack')
})
