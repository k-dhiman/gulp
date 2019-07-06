// variable  declairatioin
const { src, dest, task, parallel, series, watch } = require('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');

// create tasks
function copyfiles(done){
	return src('src/*.html')
	.pipe(dest('dist/'));
	done();
};

function sass(done){
	return src('src/assets/css/*.scss')
	.pipe(sass())
	.pipe(uglifycss())
	.pipe(dest('dist/assets/css/'));
	done();
};

function watcher(){
	watch('src/assets/css/*.scss', sass);
	watch('src/**', copyfiles);
};

task('copyfiles', copyfiles);

task('sass', sass);

task('watch', series(watcher));

task('default', parallel('copyfiles','watch') );