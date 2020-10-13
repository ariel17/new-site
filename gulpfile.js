const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const rename = require('gulp-rename');

function clean() {
    return del(['public/**'], {force:true});
}

function style() {
    return gulp.src('scss/*.scss').
        pipe(sass().on('error', sass.logError)).
        pipe(gulp.dest('public'));
}

function fa() {
    return gulp.src([
        './node_modules/@fortawesome/fontawesome-free/**/*',
    ]).pipe(gulp.dest('public/fontawesome'));
}

exports.default = gulp.series(clean, fa, style);
