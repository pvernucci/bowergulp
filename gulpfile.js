
var gulp = require('gulp');
var exec = require('child_process').exec;
//var concat = require('gulp-concat');
var paths = {
    all : ['app/**/*','!app/angularcomponent/**/*','!app/css/**/*'],
    bower : ['bower_components/**/*'],
    concat: ['app/angularcomponent/viewmodel/**/*'],
    dist : 'www',
    bower_dist:'www/bower_components'
};
gulp.task('copyall', function() {
    return gulp.src(paths.all).pipe(gulp.dest(paths.dist));
 });
gulp.task('bower', function() {
    return gulp.src(paths.bower).pipe(gulp.dest(paths.bower_dist));
 });
gulp.task('server', function(cb) {
   exec('node server.js',function(err,stdout,stderr){
       console.log(stdout);
       console.log(stderr);
       cb(err);
   })
   }
);

gulp.task('watch', function() {
    gulp.watch(paths.all,['copyall']);
});

gulp.task('default', ['watch','copyall','bower','server']);
