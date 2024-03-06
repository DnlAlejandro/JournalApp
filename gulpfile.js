import gulp, { task, src, dest, watch, series } from "gulp";
import clean from "gulp-clean";
import replace from "gulp-replace";
import minify from "gulp-minify";
const sync = require("gulp-sync")(gulp);
const browserSync = require("browser-sync").create();
import eslint, { format, failAfterError } from "gulp-eslint";

// Clean the build folder
task("clean", () => {
    return src("dist", { read: false, allowEmpty: true }).pipe(clean());
});

// Copy files to the build folder
task("copy", () => {
    return src("src/**/*").pipe(dest("dist"));
});

// Replace values within files
task("replace", () => {
    return src("dist/**/*.js")
        .pipe(replace("OLD_VALUE", "NEW_VALUE"))
        .pipe(dest("dist"));
});

// Minify code
task("minify", () => {
    return src("dist/**/*.js").pipe(minify()).pipe(dest("dist"));
});

// Validate syntax with ESLint
task("lint", () => {
    return src(["src/**/*.js", "gulpfile.js"])
        .pipe(eslint())
        .pipe(format())
        .pipe(failAfterError());
});

// Sync the browser
task("sync", () => {
    browserSync.init({
        server: {
            baseDir: "dist",
        },
    });

    watch("src/**/*", series("build", browserSync.reload));
});

// Main build task
task("build", series("clean", "copy", "replace", "minify", "lint"));

// Development task (with browser synchronization)
task("develop", series("build", "sync"));

// Default task
task("default", series("develop"));
