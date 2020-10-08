const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');

function clean() {
     return del('public/**', {force:true});
}

function style() {
    return gulp.src('scss/**/*.scss').
        pipe(sass().on('error', sass.logError)).
        pipe(gulp.dest('public'));
}

exports.default = gulp.series(clean, style);
