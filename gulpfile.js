var gulp = require('gulp');
var react = require('gulp-react');

var paths = {
    jsx: [
        'src/**/*.jsx'
    ]
};

gulp.task('default', function () {
    return gulp.src(paths.jsx)
        .pipe(react())
        .pipe(gulp.dest('build'));
});
