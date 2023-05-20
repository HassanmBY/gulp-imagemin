const gulp = require("gulp"),
	{ src, dest, watch, series } = gulp,
	imagemin = require("gulp-imagemin");

function imageminTsk(cb) {
	return (
		src("./src/**/*.{jpg,jpeg,png,gif,svg,ico}")
			.pipe(imagemin({ interlaced: true }))
			.pipe(dest("./dist/assets/")) &&
		src("./src/**/*.{mp4,webm}").pipe(dest("./dist/assets/"))
	);
	cb();
}

exports.imageTask = imageminTsk;

exports.default = series(imageminTsk);
