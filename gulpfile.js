var gulp = require('gulp');  
var sass = require('gulp-sass');  
var browserSync = require('browser-sync');


sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./sass/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css/'));
  });

gulp.task('browser-sync', function() {  
    browserSync.init(["css/*.css", "js/*.js", "sass/*.scss","index.html"], {
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['sass', 'browser-sync'], function () {  
gulp.watch("sass/*.scss", ['sass']);
});