module.exports = function(karma) {
    karma.set({
        frameworks: ['mocha'],
        files: [
          "dist/deps.min.js"
        ],
        port: 9876,
        runnerPort: 9100,
        colors: true,
        reporters: ['progress'],
        logLevel: karma.LOG_ERROR,
        browsers: ['Chrome'],
        singleRun: true,
        autoWatch: false,
    });
};
