var gulp = require('gulp');	//download the gulp package
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

gulp.task('watch', function(){
	
	browserSync.init({
		notify:false,
		server:{
			baseDir: "app"	
			}
		});						
							
	watch('./app/index.html', function(){
		browserSync.reload();
		});
	
	//watch any future folders in styles, watch any .css files
	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('cssInject');
		});
	});	



//styles is a dependency to cssInject.  cssInject owont begin until styles has run.
gulp.task('cssInject',['styles'] , function(){
	return gulp.src('./app/temp/styles/styles.css')
		.pipe(browserSync.stream());
	
	});	