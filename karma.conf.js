module.exports = function(karma) {
    karma.set({
        frameworks: ['mocha', 'chai'],
        files: [
          "dist/karma.min.js"
        ],
        reporters: ['progress'],
        browsers: ['Chrome'],
        singleRun: false,
        autoWatch: true
    });
};
