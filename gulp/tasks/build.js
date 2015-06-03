/**
 * Created by studio-mac on 1/23/15.
 */
var config =  require('../config.json').buildConfig,
    gulp = require('gulp'),
    util = require('gulp-util'),
    notify = require('gulp-notify'),
    newer = require('gulp-newer'),
    rename = require('gulp-rename'),
    print =  require('gulp-print');

var files = "",
    filedest = '';

/**
 * a basic file build good for theme starter
 */
gulp.task('build',['rename'], function(){

    var files = [config.baseBuild + '/*.html',config.baseBuild + '/pages/*.html'],
        filedest = config.baseBuild;
    gulp.src(config.basicFiles, {base : './src/'})
        .pipe(newer(config.baseBuild))
        .pipe(print())
        .pipe(gulp.dest(config.baseBuild));
})


/**
 * gulp task
 */
gulp.task('build:gulp', function(){

    gulp.src(config.gulpFiles, {base : './'})
        .pipe(newer(config.gulpBuild))
        .pipe(print())
        .pipe(gulp.dest(config.gulpBuild));

})

/**
 * gulp react build
 */
gulp.task('build:react', function(){

    gulp.src(config.reactFiles, {base : './'})
        .pipe(newer(config.reactBuild + "/uikit"))
        .pipe(print())
        .pipe(gulp.dest(config.reactBuild + "/uikit"));

})

/**
 * gulp react build
 */
gulp.task('build:reactComponents', function(){

    gulp.src(config.reactComponents, {base : './src/react-components/src/components/'})
        .pipe(newer(config.reactBuild))
        .pipe(print())
        .pipe(gulp.dest(config.reactBuild));

})


gulp.task('reactify',['build:react', 'build:reactComponents'], function(){})



gulp.task("rename", function(){
    gulp.src(files, {base : filedest })
        .pipe(rename({extname: ".twig"}))
        .pipe(gulp.dest(filedest));
})



