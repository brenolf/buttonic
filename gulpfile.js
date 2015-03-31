var gulp         = require('gulp'),
    less         = require('gulp-less'),
    minifyCSS    = require('gulp-minify-css'),
    uglify       = require('gulp-uglify'),
    concat       = require('gulp-concat'),
    rename       = require('gulp-rename'),
    concat       = require('gulp-concat'),
    watch        = require('gulp-watch'),
    ghPages      = require('gulp-gh-pages'),
    zip          = require('gulp-zip'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task ('default', ['zip', 'scripts']);

gulp.task ('styles', function () {
    return gulp
    .src('./src/css/*.less')
    .pipe(less())
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./build/assets/css/'));
});

gulp.task ('scripts', function () {
    return gulp
    .src('./src/js/*.js')
    .pipe(concat('js.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/assets/js/'));
});

gulp.task ('zip', ['styles'], function () {
    return gulp
    .src('./build/assets/css/buttonic-*.css')
    .pipe(zip('buttonic.zip'))
    .pipe(gulp.dest('./build'));
});

gulp.task('deploy', ['default'], function() {
    return gulp
    .src('./build/**/*')
    .pipe(ghPages({
        message: 'Deploy on gh-pages',
        force: true
    }));
});

gulp.task ('watch', ['default'], function () {
    gulp.watch('./src/css/**/*', ['styles']);
});