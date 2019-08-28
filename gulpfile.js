// variable  declairatioin
const { src, dest, task, parallel, series, watch } = require('gulp');
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');

// create functions for copy files
function copyfiles(done){
	return src('src/*.html')
	.pipe(dest('dist/'));
	done();
};

// create function for sass
function style(done){
	return src('src/assets/css/*.scss')
	.pipe(sass())
	.pipe(uglifycss())
	.pipe(dest('dist/assets/css/'));
	done();
};

// create watcher function
function watcher(){
	watch('src/assets/css/*.scss', style);
	watch('src/**', copyfiles);
};

// create all tasks
task('copyfiles', copyfiles);

task('style', style);

task('watch', series(watcher));

// create default task
task('default', parallel('copyfiles','watch') );

