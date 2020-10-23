const gulp = require("gulp");
const paths = require('../paths.json');
const cache = require('gulp-cached');
const debug = require('gulp-debug');

function image(done) {
 gulp.src(paths.src.image.path)
 .pipe(cache())
 .pipe(debug({title: 'Copied image:'}))
 .pipe(gulp.dest(paths.dist.image.pathFolder))
 done();
}

module.exports.image = image;