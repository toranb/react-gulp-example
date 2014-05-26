var gulp = require('gulp');
var concat = require('gulp-concat');
var react = require('gulp-react');

var paths = {
    deps: [
        'bower_components/react/react.js',
        'src/**/*.jsx'
    ]
};

gulp.task('default', function () {
    return gulp.src(paths.deps)
        .pipe(react())
        .pipe(concat('deps.min.js'))
        .pipe(gulp.dest('dist'));
});
