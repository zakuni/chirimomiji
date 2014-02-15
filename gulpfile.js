var gulp = require('gulp');
var gutil = require('gulp-util');
var notify  = require('gulp-notify');
var growl = require('gulp-notify-growl');

var coffee = require('gulp-coffee');

var growlNotifier = growl({
  hostname : 'localhost' // IP or Hostname to notify, default to localhost
});

var paths = {
  coffee: ['*.coffee']
};

gulp.task('coffee', function() {
  gulp.src(paths.coffee)
    .pipe(coffee({sourceMap: true})
      .on('error', gutil.log)
      .on('error', notify.onError({
        notifier: growlNotifier
      }))
    )
    .pipe(gulp.dest('./'))
    .pipe(notify({notifier: growlNotifier}));
});

gulp.task('watch', function() {
  gulp.watch(paths.coffee, ['coffee']);
});

gulp.task('default', ['coffee', 'watch']);