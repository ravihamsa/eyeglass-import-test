#!/usr/bin/env node
var path = require("path");
var sass = require("node-sass");
var fs = require('fs');
var eyeglass = require("eyeglass");
var rootDir = __dirname;

var options = {
	file:'src/assets/styles.scss',
	outFile: 'src/assets/styles.css'

}

options.eyeglass = {
	cssDir:'assets/styles',
	buildDir: path.join(rootDir, "dist"),
	engines: {
		sass: sass
	}
}

sass.render(eyeglass(options), function(err, result) {
	console.log(err);
	console.log(result.css.toString());
});