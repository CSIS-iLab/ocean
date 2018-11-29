const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const config = require('../frasco.config.js')
const gulp = require('gulp')
const mqpacker = require('css-mqpacker')
const postcss = require('gulp-postcss')
const sass = require('gulp-sass')
const rename = require('gulp-rename')

gulp.task('sass', ['styleLint'], function() {
  return gulp
    .src(config.assets + '/' + config.sass.src + '/**/*.scss')
    .pipe(
      sass({ outputStyle: config.sass.outputStyle }).on('error', sass.logError)
    )
    .pipe(
      postcss([
        autoprefixer(config.sass.autoprefixer),
        mqpacker({
          sort: true
        }),
        cssnano({
          preset: 'default'
        })
      ])
    )
    .pipe(
      rename(function(file) {
        file.dirname = file.dirname.split('/')[0]
      })
    )
    .pipe(gulp.dest(config.assets + '/' + config.sass.dest))
})
