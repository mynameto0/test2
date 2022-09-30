const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
 
gulp.task('minify', () => {
  return gulp.src('app/*.html')
    .pipe(htmlmin({ collapseWhitespace: true, minifyCSS: true }))
    .pipe(gulp.dest('dist'));
});