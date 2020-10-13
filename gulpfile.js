const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const rename = require('gulp-rename');

function clean() {
    return del(['public/**', 'scss/fontawesome'], {force:true});
}

function style() {
    return gulp.src('scss/custom.scss').
        pipe(sass().on('error', sass.logError)).
        pipe(gulp.dest('public'));
}

function _fa() {
    return gulp.src('./node_modules/@fortawesome/fontawesome-free/scss/*').
        pipe(gulp.dest('scss/fontawesome'));
}

function _fa_variables() {
    del('scss/fontawesome/_variables.scss', {force:true});
    return gulp.src('scss/fa_variables.scss').
        pipe(rename('_variables.scss')).
        pipe(gulp.dest('scss/fontawesome'));
}

function _fa_webfonts() {
    return gulp.src('./node_modules/@fortawesome/fontawesome-free/webfonts/*').
        pipe(gulp.dest('public/webfonts'));
}

exports.default = gulp.series(clean, _fa, _fa_variables, _fa_webfonts, style);
