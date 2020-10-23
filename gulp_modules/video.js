const gulp = require("gulp");
const paths = require('../paths.json');
const cache = require('gulp-cached');
const debug = require('gulp-debug');

function video(done) {
 gulp.src(paths.src.video.path)
 .pipe(cache())
 .pipe(debug({title: 'Copy video:'}))
 .pipe(gulp.dest(paths.dist.video.pathFolder))
 done();
}

module.exports.video = video;