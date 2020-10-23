const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('../webpack.config').webpacConfig;
const plumber = require('gulp-plumber');
const paths = require('../paths.json');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

const isDeploy = !!argv.deploy || !!argv.d ? true : false;
if(isDeploy){
 webpackConfig.devtool = 'source-map';
 webpackConfig.mode = 'production';
}
else{
 webpackConfig.mode = 'development';
}

function script(done) {
 gulp.src(paths.src.page.pathScripts)
 .pipe(plumber())
 .pipe(webpackStream(webpackConfig), webpack)
 .pipe(gulp.dest(paths.dist.script.pathFolder));
 done();
}

module.exports.script = script;