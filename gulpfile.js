
var gulp = require('gulp');
//var concat = require('gulp-concat');
var paths = {
    all : ['app/**/*','!app/angularcomponent/**/*','!app/css/**/*'],
    concat: ['app/angularcomponent/viewmodel/**/*'],
    dist : 'www'
};
gulp.task('copyall', function() {
    return gulp.src(paths.all).pipe(gulp.dest(paths.dist));
 });


gulp.task('watch', function() {
    gulp.watch(paths.all,['copyall']);
});

gulp.task('default', ['watch','copyall']);
