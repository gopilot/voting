var gulp = require('gulp');
var stylus = require('gulp-stylus');
// compile css
gulp.task('stylus', function () {
    return gulp.src('master.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
  gulp.watch('master.styl', ['stylus']);
});


