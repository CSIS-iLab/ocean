const argv = require('yargs').argv
const babel = require('gulp-babel')
const config = require('../frasco.config.js')
const gulp = require('gulp')
const named = require('vinyl-named')
const plumber = require('gulp-plumber')
const webpackStream = require('webpack-stream')
const webpack = require('webpack')
const webpackConfig = require('../webpack.config.js')

const entry = []
for (var i = 0; i <= config.js.entry.length - 1; i++) {
  entry.push(config.assets + '/' + config.js.src + '/' + config.js.entry[i])
}

if (config.tasks.eslint) webpackConfig.module.rules.push(config.eslintLoader)

webpackConfig.watch = argv.watch
webpackConfig.mode = argv.mode || webpackConfig.mode

gulp.task('webpack', function() {
  return gulp
    .src(entry)
    .pipe(plumber())
    .pipe(named())
    .pipe(babel())
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest(config.assets + '/' + config.js.dest))
})

// For internal use only
gulp.task('_webpack', function() {
  webpackConfig.watch = config.tasks.watch
  gulp.start('webpack')
})
