const gulp = require("gulp");
const paths = require('../paths.json');
const cache = require('gulp-cached');
const debug = require('gulp-debug');

function font(done) {
 gulp.src(paths.src.font.path)
 .pipe(cache())
 .pipe(debug({title: 'Copied font:'}))
 .pipe(gulp.dest(paths.dist.font.pathFolder))
 done();
}

module.exports.font = font;