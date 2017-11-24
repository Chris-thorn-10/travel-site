var gulp = require('gulp');
var modernizr = require('gulp-modernizr');

//gulp-modernizr can test browsers for hundreds of features. the more features we test for the larger the file, the slower the browser will load.  By using gulp to build we have an efficient website.


//pipe our code through modernizr engine
//reviews code to determine which features we need to test for and generates lightweight js file
//js file is piped to desination
gulp.task("modernizr", function() {
   return gulp.src(['./app/assets/styles/**/*.css', './app/assets/scripts/**/*.js']) 
    .pipe(modernizr({
       "options": [
           "setClasses"
       ]
   })) 
    .pipe(gulp.dest('./app/temp/scripts/')); 
});