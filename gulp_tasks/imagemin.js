const config   = require('../frasco.config.js');
const gulp     = require('gulp');
const imagemin = require('gulp-imagemin');
const newer    = require('gulp-newer');
const plumber  = require('gulp-plumber');
const pngquant = require('imagemin-pngquant');

gulp.task('imagemin', function () {
  return gulp.src(config.assets + '/' + config.imagemin.src + '/**/*')
    .pipe(plumber())
    .pipe(newer(config.assets + '/' + config.imagemin.dest))
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: config.imagemin.progressive}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
        plugins: config.imagemin.svgoPlugins
      })
    ]))
    .pipe(gulp.dest(config.assets + '/' + config.imagemin.dest));
});
