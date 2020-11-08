const gulp = require('gulp');
const paths = require('../paths.json');
const { font } = require('./font');
const { image } = require('./image');
const { page } = require('./page');
const { script } = require('./script');
const { sprite } = require('./sprite');
const { style } = require('./style');
const { video } = require('./video');
const { createPage, createBlock } = require('./create');

function watch(done) {
 gulp.watch([
  paths.src.page.pathPage,
  paths.src.moduleIncludes.pathPage,
  paths.src.viewIncludes.pathPage
 ], page);
 gulp.watch([
  paths.src.page.pathStyles,
  paths.src.block.pathStyles,
  paths.src.moduleIncludes.pathStyle,
  paths.src.viewIncludes.pathStyle,
  paths.src.globalStyle.path
 ], style);
 gulp.watch([
  paths.src.page.pathScripts,
  paths.src.block.pathScripts,
  paths.src.moduleIncludes.pathScript,
  paths.src.viewIncludes.pathScript,
  paths.src.globalScript.path
 ], script);
 gulp.watch([
  paths.src.image.path
 ], image);
 gulp.watch([
  paths.src.font.path
 ], font);
 gulp.watch([
  paths.src.video.path
 ], video);
 gulp.watch([
  paths.src.sprite.path
 ], sprite);
 gulp.watch(paths.src.page.pathFolder+"*").on('addDir', () =>{createPage()});
 gulp.watch(paths.src.block.pathFolder+"*").on('addDir', () =>{createBlock()});
 done();
}

module.exports.watch = watch;