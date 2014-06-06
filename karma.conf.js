module.exports = function(karma) {
    karma.set({
        frameworks: ['mocha', 'chai'],
        files: [
          "dist/karma.min.js"
        ],
        port: 9876,
        runnerPort: 9100,
        colors: true,
        reporters: ['progress'],
        logLevel: karma.LOG_ERROR,
        browsers: ['Chrome'],
        singleRun: false,
        autoWatch: true,
    });
};
