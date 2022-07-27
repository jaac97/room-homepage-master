const gulp= require('gulp');
const {series, parallel}  = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const jpg = require('gulp-jpg');
function buildStyles() {
    return gulp.src('./src/sass/**/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./build/css'));
};

function convertjpg() {
    return gulp.src('./src/images/**/*')
          .pipe(jpg())
          .pipe(gulp.dest('./build/images'));
}
function watchers () {
    gulp.watch('./src/sass/**/*.scss', buildStyles);
    gulp.watch('./src/images/**/*', convertjpg)

}
exports.buildStyles = buildStyles;
exports.default = parallel(buildStyles,watchers);