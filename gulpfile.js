let gulp 			= require('gulp');
let helpers         = require('./gulp.helpers');
let minify          = require('gulp-babel-minify');

let PUBLIC_DIR = './public';
let SRC_PATH   = 'src';

require("any-promise/register")("bluebird");

gulp.task('script', () => {
    return helpers.es6toes5(SRC_PATH+'/index.js', 'app.js');
});

gulp.task('script-min', ['script'], () => {
    return gulp.src(PUBLIC_DIR+'/app.js')
        .pipe(minify({
            mangle        : true,
            drop_debugger : true,
            drop_console  : true,
            evaluate      : true,
            unsafe        : false
        }))
        .pipe(gulp.dest(PUBLIC_DIR+'/js'));
});

gulp.task('watch', () => {
    gulp.watch(SRC_PATH+'/**/*.js', ['script']);
});

gulp.task('default', ['script', 'watch']);
gulp.task('prod', ['script-min']);