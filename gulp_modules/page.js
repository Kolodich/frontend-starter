const gulp = require("gulp");
const paths = require('../paths.json');
const nunjucksRender = require('gulp-nunjucks-render');
const rename = require("gulp-rename");
const replace = require('gulp-replace');
const beautify = require('gulp-jsbeautifier');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;
const cache = require('gulp-cached');
const debug = require('gulp-debug');
const plumber = require('gulp-plumber');
const htmlmin = require('gulp-htmlmin');
const gulpif = require('gulp-if');

function page(done) {
 const nunjucksConfig = {
  path: [
   paths.src.viewIncludes.pathPageFolder,
   paths.src.moduleIncludes.pathPageFolder
  ]
 };
 gulp.src(paths.src.page.pathPage)
  .pipe(plumber())
  .pipe(nunjucksRender(nunjucksConfig))
  .pipe(cache())
  .pipe(debug({title: 'Bilded page:'}))
  .pipe(replace('../../.', ''))
  .pipe(rename(function (p) {p.dirname = "";}))
  .pipe(gulpif(argv.indent == 0, htmlmin({
    collapseWhitespace: true 
   })))
  .pipe(gulpif(argv.indent != 0, beautify({
   indent_size: !!argv.indent ? argv.indent : 2
  })))
  .pipe(gulp.dest(paths.dist.pathFolder));
 done();
};

module.exports.page = page;