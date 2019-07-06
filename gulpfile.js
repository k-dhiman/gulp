// variable  declairatioin
const { src, dest, task, parallel, series, watch } = require('gulp');
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');

// create functions
function copyfiles(done){
	return src('src/*.html')
	.pipe(dest('dist/'));
	done();
};

function style(done){
	return src('src/assets/css/*.scss')
	.pipe(sass())
	.pipe(uglifycss())
	.pipe(dest('dist/assets/css/'));
	done();
};

function watcher(){
	watch('src/assets/css/*.scss', style);
	watch('src/**', copyfiles);
};

// create tasks
task('copyfiles', copyfiles);

task('style', style);

task('watch', series(watcher));

task('default', parallel('copyfiles','watch') );

