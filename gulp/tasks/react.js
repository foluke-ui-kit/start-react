/**
 * Created by studio-mac on 2/16/15.
 * @credits - https://www.codementor.io/reactjs/tutorial/react-js-browserify-workflow-part-2
 */

var gulp = require('gulp');
var source = require('vinyl-source-stream'); // Used to stream bundle for further handling
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');
var notify = require('gulp-notify');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var gutil = require('gulp-util');
var shell = require('gulp-shell');
var glob = require('glob');
var config = require('../config.json');

//var jasminePhantomJs = require('gulp-jasmine2-phantomjs');
// External dependencies you do not want to rebundle while developing,
// but include in your application deployment

var dependencies = [
    'react'
];

var browserifyReact = function (options) {
    // Our app bundler
    var appBundler = browserify({
        entries: [options.src], // Only need initial file, browserify finds the rest
        transform: [reactify], // We want to convert JSX to normal javascript
        debug: false,
        cache: {},
        packageCache: {},
        fullPaths: options.development // Requirement of watchify
    });

    /* We set our dependencies as externals of our app bundler.
     For some reason it does not work to set these in the options above */
    //appBundler.external(options.development ? dependencies : []);

    appBundler.external(!options.development ? dependencies : []);
    // Again we tell this bundle about our external dependencies

    appBundler.external(dependencies);


    // The rebundle process
    var rebundle = function () {
        var start = Date.now();
        console.log('Building APP bundle');
        appBundler.bundle()
            .on('error', gutil.log)
            .pipe(source(config.react.bundle_file))
            .pipe(streamify(uglify()))
            .pipe(gulp.dest(options.dest))
            .pipe(notify(function () {
                console.log('App bundle built in ' + (Date.now() - start) + 'ms');
            }));

        var libs = browserify({
            debug: true
        });

        dependencies.forEach(function(dep) {
            libs.require(dep);
        });

        libs.bundle()
            .on('error', gutil.log)
            .pipe(source('libs.js'))
            .pipe(gulpif(!options.development, streamify(uglify())))
            .pipe(gulp.dest(options.dest))
            .pipe(notify(function(){
                console.log('Built libs' + Date.now() - start + 'ms');
            }))
        ;



    };

    rebundle();





    // Fire up Watchify when developing
    if (options.development) {
        //appBundler = watchify(appBundler);
        //appBundler.on('update', rebundle);
    }



    // We create a separate bundle for our dependencies as they
    // should not rebundle on file changes. This only happens when
    // we develop. When deploying the dependencies will be included
    // in the application bundle
    if (options.development) {

        var devBundler = browserify({
            entries: [config.react.dev_src], // Only need initial file, browserify finds the rest
            transform: [reactify], // We want to convert JSX to normal javascript
            debug: options.development, // Gives us sourcemapping
            cache: {},
            packageCache: {},
            fullPaths: options.development // Requirement of watchify
        });


        // The rebundle process
        var dev_rebundle = function () {
            var start = Date.now();
            console.log('Building APP bundle');
            devBundler.bundle()
                .on('error', gutil.log)
                .pipe(source('components.js'))
                .pipe(gulp.dest(config.react.dest + 'dev/'))
                .pipe(notify(function () {
                    console.log('dev bundle built in ' + (Date.now() - start) + 'ms');
                }));


        }
        dev_rebundle();
    }


}

// Starts our development workflow
gulp.task('react', function () {

    browserifyReact({
        development: true,
        src: config.react.src,
        dest: config.react.dest
    });

});

gulp.task('react-deploy', function () {

    browserifyReact({
        development: false,
        src: config.react.src,
        dest: config.react.dest
    });

});


/**
 * in future uncomment
 */
//gulp.task('test', function () {
//    return gulp.src('./build/testrunner-phantomjs.html').pipe(jasminePhantomJs());
//});


