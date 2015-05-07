module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine', 'sinon'],


        // list of files / patterns to load in the browser
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/angular-animate/angular-animate.js',
            'bower_components/angular-resource/angular-resource.js',
            'bower_components/angular-translate/angular-translate.js',
            'bower_components/angular-translate-loader-url/angular-translate-loader-url.js',
            'bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js',
            'bower_components/angular-ui-utils/ui-utils.js',
            'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
            'bower_components/moment/moment.js',
            'bower_components/angular-ui-calendar/src/calendar.js',
            'bower_components/angular-moment/angular-moment.js',
            'bower_components/oclazyload/dist/ocLazyLoad.min.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/angular-resource/angular-resource.js',
            'bower_components/angular-translate/angular-translate.js',
            'bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
            'bower_components/angular-translate-loader-url/angular-translate-loader-url.js',
            'bower_components/angular-toastr/dist/angular-toastr.tpls.js',
            'bower_components/tv4/tv4.js',
            'bower_components/angular-sanitize/angular-sanitize.js',
            'bower_components/objectpath/lib/ObjectPath.js',
            'bower_components/angular-schema-form/dist/schema-form.js',
            'bower_components/angular-schema-form/dist/bootstrap-decorator.js',
            'app/modules/app.js',
            'app/modules/**/*.module.js',
            'app/modules/**/*.js',
            'tests/unit/*Spec.js',
            'tests/unit/**/*Spec.js'
        ],

        plugins: [
            'karma-jasmine',
            'karma-sinon',
            'karma-coverage',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-junit-reporter'
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'app/modules/**/*.js': ['coverage']
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'],

        // optionally, configure the reporter
        coverageReporter: {
            type : 'html',
            dir : 'coverage/'
        },


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    });
};
