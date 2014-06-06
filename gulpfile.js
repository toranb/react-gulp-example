var gulp = require('gulp');
var concat = require('gulp-concat');
var karma = require('gulp-karma');
var react = require('gulp-react');
var gulpFilter = require('gulp-filter');
var transpiler = require('gulp-es6-module-transpiler');

var paths = {
    deps: [
        "bower_components/ember-loader/loader.js",
        "bower_components/react/react.js",
        "bower_components/react/react-with-addons.js",
        "src/**/*.jsx"
    ],
    karma: [
        "dist/deps.min.js",
        "test/**/*.spec.js"
    ]
};

var filter = gulpFilter(function(file) {
  return file.path.indexOf('bower_components') === -1;
});

gulp.task('default', function(){
    return gulp.src(paths.deps)
        .pipe(filter)
        .pipe(react())
        .pipe(transpiler({
            type: "amd",
        }))
        .pipe(filter.restore())
        .pipe(concat('deps.min.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('test', ['default'], function () {
    return gulp.src(paths.karma)
        .pipe(concat('karma.min.js'))
        .pipe(gulp.dest('dist'))
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }));
});
