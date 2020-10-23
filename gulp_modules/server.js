const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const paths = require('../paths.json');
const config = require('../config.json');

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

const port = !! argv.port ? argv.port : config.server.port;

function server(done) {
 browserSync.init({
  watch: true,
  files: paths.dist.path,
  port: port,
  server: {
    baseDir: paths.dist.pathFolder
  },
  routes: {
   "/node_modules": "../node_modules",
   "/src": "../src"
  },
 });
 done();
}

module.exports.server = server;