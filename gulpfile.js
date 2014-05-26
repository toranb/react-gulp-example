var gulp = require('gulp');
var concat = require('gulp-concat');
var karma = require('gulp-karma');
var react = require('gulp-react');

var paths = {
    deps: [
        'bower_components/react/react.js',
        'src/**/*.jsx'
    ],
    test: [
        'bower_components/react/react.js',
        'src/**/*.jsx',
        'test/**/*.spec.js'
    ]
};

gulp.task('default', function () {
    return gulp.src(paths.deps)
        .pipe(react())
        .pipe(concat('deps.min.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('test', function () {
    return gulp.src(paths.test)
        .pipe(react())
        .pipe(concat('deps.min.js'))
        .pipe(gulp.dest('dist'))
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }));
});
