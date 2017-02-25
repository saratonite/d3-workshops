
var rootDir = process.argv[2];
console.info('Serving on ',rootDir);
var BaseDir = "./src/"+rootDir;

// Middle wares
var browserSync = require('browser-sync');
module.exports = {
    "files" : [BaseDir+"/**/*.js",BaseDir+"/**/*.css",BaseDir+"/**/*.html",BaseDir+"/**/*.json"],
    "server" : {
        "baseDir" : BaseDir
    },
    serveStatic: ['.', './src/shared']
  //  "browser" : ["google-chrome", "firefox"]
}
