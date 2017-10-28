var gulp = require('gulp');	//download the gulp package
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');

//defining a default task. 
//if no default task, you will get an error message when running gulp
gulp.task('default', function(){
	console.log("Hooray! You created a Gulp task.");
	});	

gulp.task('html', function(){
	console.log("Imagine something useful being done to your HTML here.");
	});	

gulp.task('styles', function(){
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssvars,nested,autoprefixer]))
		.pipe(gulp.dest('./app/temp/styles'));
	
	});	


gulp.task('watch', function(){
	watch('./app/index.html', function(){
		gulp.start('html');
		});
	//watch any future folders in styles, watch any .css files
	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('styles');
		});
	});	