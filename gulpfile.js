const gulp= require('gulp');
const {series, parallel}  = require('gulp')
const sass = require('gulp-sass')(require('sass'));


function buildStyles() {
    return gulp.src('./src/sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./build/css'));
  };
  
function watchers () {
    gulp.watch('./src/sass/**/*.scss', buildStyles);
}
exports.buildStyles = buildStyles;
exports.default = parallel(watchers);