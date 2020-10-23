const gulp = require("gulp");
const	vinylFtp = require('vinyl-ftp');
const paths = require('../paths.json');
const config = require('../config.json');
 
function ftp(done) {
 const conn = vinylFtp.create({
		host: config.ftp.host,
		user: config.ftp.user,
		password: config.ftp.password,
	});
	gulp.src(paths.dist.path, {buffer: false})
		.pipe(conn.dest(config.ftp.dest));
 done();
}

module.exports.ftp = ftp;