/**
 * Created by studio-mac on 2/25/15.
 * Type: `String`
 * Default: `patch`
 * Valid values: `major|minor|patch|prerelease`
 */
var gulp = require('gulp');
var bump = require('gulp-bump'),
    source = require('vinyl-source-stream');
var config = require('../config.json');

/**
 * General bump function
 * @param options
 * @returns {Stream|*}
 */
var bumpUp = function (options) {

    var src = options.src || config.bump.files,
        b_type = options.type || 'patch',
        dest = options.desc || './';

    return gulp.src(src, {base: './'})
        .pipe(bump({type: b_type}))
        .pipe(gulp.dest(dest));

}

/**
 * patch files
 */
gulp.task('bump', function () {
    var opts = {
        "files": config.bump.files,
    };
    bumpUp(opts);
})

// Defined method of updating:
// Semantic
gulp.task('bump-minor', function () {
    var opts = {
        "type": "minor"
    }

    bumpUp(opts);
});

// Defined method of updating:
// Semantic major
gulp.task('bump-major', function () {
    var opts = {
        "type": "minor"
    }
    bumpUp(opts);
});


// Define the key for versioning off
gulp.task('bump-key', function () {
    gulp.src(config.bump.files, {base: './'})
        .pipe(bump({key: "appversion"}))
        .pipe(gulp.dest('./'));
});