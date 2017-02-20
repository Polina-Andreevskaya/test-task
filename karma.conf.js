// Karma configuration
// Generated on Mon Feb 13 2017 13:06:21 GMT+0300 (Belarus Standard Time)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: 'C:/Users/Palina_Andreyeuskaya/Desktop/test task/test-task/',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            //libs
            'C:/Program Files/nodejs/node_modules/angular/angular.min.js',

            'node_modules/angular-mocks/angular-mocks.js',
            'app/scripts/libs/lodash.min.js',
            'app/scripts/libs/skycons.js',
            //app
            "app/scripts/app.module.js",
            "app/scripts/controllers/*.js",
            "app/scripts/services/*.js",
            "app/scripts/directives/*.js",

            'app/templates/*.html',

            "app/tests/*.js",
        ],
        plugins: [
            'karma-ng-html2js-preprocessor',
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-html-reporter',

        ],

        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'app/templates/*.html': ['ng-html2js']
        },

        ngHtml2JsPreprocessor: {
            //     // ...
            stripPrefix: 'app/',
            moduleName: 'allTemplates'
        },
        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'html'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}
