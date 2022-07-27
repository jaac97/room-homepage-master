const gulp= require('gulp');
const {series, parallel}  = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const minify = require('gulp-minify');

function buildStyles() {
    return gulp.src('./src/sass/**/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./build/css'));
};
function minifyJs () {
    return  gulp.src('src/js/app.js')
    .pipe(sourcemaps.init())
    .pipe(minify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('build/js'))

 
       
}

function convertWebp() {
    return gulp.src('./src/images/**/*')
          .pipe(jpg())
          .pipe(gulp.dest('./build/images'));
}

function watchers () {
    gulp.watch('./src/sass/**/*.scss', buildStyles);
    // gulp.watch('./src/images/**/*', convertWebp)

}
exports.buildStyles = buildStyles;
exports.minifyJs = minifyJs;
exports.default = parallel(buildStyles,watchers);