const gulp = require("gulp");
const paths = require('../paths.json');
const cln = require('gulp-clean');
const config = require('../config.json');

function clean(done) {
  gulp.src( paths.dist.pathFolder+"*", {read: false})
  .pipe(cln());
  setTimeout(() => {
    done();    
  }, config.clean.delay);
}

module.exports.clean = clean;