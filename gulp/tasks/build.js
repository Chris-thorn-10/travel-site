var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var del = require('del');
var usemin = require('gulp-usemin');


//delete the dist folder every time we run the build task
gulp.task('deleteDistFolder', function() {
    return del('./dist');
});

//copy and compress image files
gulp.task('optimizeImages',['deleteDistFolder'], function() {
    return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            multipass: true,
    }))
        .pipe(gulp.dest('./dist/assets/images'));
});


//copy, compress, and revision (add letters and numbers to break caching)css and java generated files (none of the modules)
gulp.task('usemin',['deleteDistFolder'], function(){
    return gulp.src('./app/index.html')
        .pipe(usemin())
        .pipe(gulp.dest('./dist'));
});


gulp.task('build', ['deleteDistFolder','optimizeImages', 'usemin']);

