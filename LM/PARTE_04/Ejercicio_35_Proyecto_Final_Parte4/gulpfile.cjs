const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');

function styles() {
    return gulp.src('scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(gulp.dest('css'));
}

// WATCH (automático)
function watchFiles() {
    gulp.watch('scss/**/*.scss', styles);
}

exports.default = gulp.series(styles, watchFiles);