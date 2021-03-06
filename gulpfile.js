const gulp = require("gulp");
const { page } = require("./gulp_modules/page");
const { style } = require("./gulp_modules/style");
const { script } = require("./gulp_modules/script");
const { video } = require("./gulp_modules/video");
const { font } = require("./gulp_modules/font");
const { image } = require("./gulp_modules/image");
const { sprite } = require("./gulp_modules/sprite");
const { clean } = require("./gulp_modules/clean");
const { server } = require("./gulp_modules/server");
const { watch } = require("./gulp_modules/watch");
const { ftp } = require("./gulp_modules/ftp");
const { createPage, createBlock } = require('./gulp_modules/create');

const build = gulp.series(
 gulp.parallel(clean, (done)=>{createBlock; done();}, (done)=>{createPage; done();}), 
 gulp.parallel(page, style, script, video, font, image, sprite)
);
module.exports.default =  build;
module.exports.dev = gulp.series(build, gulp.parallel(server, watch));
module.exports.ftp =  gulp.series(build, ftp);
module.exports.page = page;
module.exports.style = style;
module.exports.sprite = sprite;
module.exports.script = script;
module.exports.video = video;
module.exports.font = font;
module.exports.image = image;
module.exports.clean = clean;