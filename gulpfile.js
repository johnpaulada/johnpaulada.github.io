var gulp      = require('gulp');
var concat    = require('gulp-concat');
var cleanCSS  = require('gulp-clean-css');
var uglify    = require('gulp-uglify');

gulp.task('minify-css', function() {
    return gulp.src('src/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('minify-js', function() {
    return gulp.src('src/js/*.js')
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});
