const gulp = require("gulp");
const paths = require('../paths.json');
const rename = require("gulp-rename");
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;
const svgSprite = require('gulp-svg-sprite');
const plumber = require('gulp-plumber');
const debug = require('gulp-debug');

const boxSize = !! argv.boxSize ? argv.boxSize : 32;

function sprite(done) {
  let SPRITE_CONFIG = {
    expand: true,
    svg: { 
      xmlDeclaration: true, 
      doctypeDeclaration: false, 
      namespaceIDs: false, 
      namespaceClassnames: false,
      dimensionAttributes: false
    },
    shape: {
      dimension: {
        maxWidth: boxSize,
        maxHeight: boxSize,
        attributes: false,
      },  
      'spacing': {
        'padding': 10,
        'box': 'content'
      }
    },
    mode: {
      view: { 
        bust: true,
        dest: './' 
      },
    }
  };
 gulp.src(paths.src.sprite.path)
  .pipe(plumber())
  .pipe(svgSprite(SPRITE_CONFIG))
  .pipe(rename(function (p) {
   p.dirname = "";
   p.basename = "sprite";
  }))
  .pipe(debug({title: 'Bilded sprite:'}))
  .pipe(gulp.dest(paths.dist.sprite.pathFolder));
 done();
}

module.exports.sprite = sprite;