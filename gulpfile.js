const gulp= require('gulp');
const {series, parallel}  = require('gulp')
const sass = require('gulp-sass')(require('sass'));


function buildStyles() {
    return gulp.src('./build/sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'));
  };
  
function watchers () {
    gulp.watch('./sass/base/**/*.scss', buildStyles);
}
exports.buildStyles = buildStyles;
exports.default = parallel(watchers);