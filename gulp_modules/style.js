const gulp = require("gulp");
const paths = require('../paths.json');
const rename = require("gulp-rename");
const replace = require('gulp-replace');
const sourcemaps = require('gulp-sourcemaps');
const gulpif = require('gulp-if');
const cache = require('gulp-cached');
const debug = require('gulp-debug');
const plumber = require('gulp-plumber');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sass = require('gulp-sass');
const mqpacker = require("css-mqpacker");
const postcssShort = require('postcss-short');
const mediaSorting = require('postcss-sort-media-queries');
const orderedValues = require('postcss-ordered-values');
const normalizeUrl = require('postcss-normalize-url');
const cssDeclarationSorter = require('css-declaration-sorter');

const isDeploy = !! argv.deploy || !! argv.d ? true : false;

function style(done) {
 let plugins; 
 if(isDeploy){
  plugins = [
   postcssShort(),
   mqpacker(),
   mediaSorting(),
   orderedValues(),
   cssDeclarationSorter({order: 'smacss'}),
   normalizeUrl(),
   autoprefixer(),
   cssnano()
  ];
 }
 else{
  plugins = [
   postcssShort()
  ];
 }
 gulp.src(paths.src.page.pathStyles) 
  .pipe(sass().on('error', sass.logError))
  .pipe(plumber())
  .pipe(gulpif(isDeploy, sourcemaps.init()))
  .pipe(gulpif(!isDeploy, postcss(plugins)))
  .pipe(gulpif(isDeploy, postcss(plugins)))
  .pipe(cache())
  .pipe(gulpif(isDeploy, sourcemaps.write("./")))
  .pipe(replace(/(..\/..\/)/gmi, ''))
  .pipe(debug({title: 'Bilded style:'}))
  .pipe(rename(function (p) {p.dirname = "";}))
  .pipe(gulp.dest(paths.dist.style.pathFolder));
 done();
}

module.exports.style = style;