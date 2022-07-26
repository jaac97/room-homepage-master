const gulp= require('gulp');
const {series, parallel}  = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

function buildStyles() {
    return gulp.src('./src/sass/**/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./build/css'));
  };
  
function watchers () {
    gulp.watch('./src/sass/**/*.scss', buildStyles);
}
exports.buildStyles = buildStyles;
exports.default = parallel(watchers);