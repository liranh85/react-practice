var gulp = require("gulp");
var browserify = require("browserify");
var source = require("vinyl-source-stream");

gulp.task("browserify", function() {
	return browserify("./src/jsx/index.jsx")
		.transform("babelify", {presets: ['es2015', 'react']})
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest("./build/"));
});