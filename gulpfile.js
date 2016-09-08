var gulp      = require('gulp');
var concat    = require('gulp-concat');
var cleanCSS  = require('gulp-clean-css');
var concatCSS = require('gulp-concat-css');

gulp.task('minify-css', function() {
    return gulp.src('src/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest('dist'));
});
