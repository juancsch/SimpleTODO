module.exports = function(config) {

    config.set({

        basePath: '../',

        files: [
            'test/test-main.js', {
                pattern: 'src/**/*.js',
                included: false
            }, {
                pattern: 'test/specs/**/*.js',
                included: false
            }
        ],

        exclude : [
          'src/bower_components/**/*Sepc.js',
          'src/bower_components/**/*Test.js',
          'src/bower_components/**/spec/**/*.js',
          'src/bower_components/**/test/**/*.js'
        ],

        autoWatch: true,

        frameworks: ['requirejs', 'jasmine', 'sinon'],

        //browsers: ['PhantomJS', '/usr/bin/firefox', '/usr/bin/chromium-browse'],
        browsers: ['PhantomJS'],

        // test results reporter to use: possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        // possible values: 'dots', 'progress', 'junit', 'html', growl', 'coverage'
        reporters: ['dots', 'html'],

        // web server port
        //port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        plugins: [
            'karma-requirejs',
            'karma-jasmine',
            'karma-sinon',
            'karma-script-launcher',
            'karma-phantomjs-launcher',
            //'karma-chrome-launcher',
            //'karma-firefox-launcher',
            //'karma-junit-reporter',
            //'karma-html-reporter',
            'karma-jasmine-html-reporter'
            //'karma-growl-reporter'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

        // the default configuration: karma-jasmine-html-reporter
        /* htmlReporter: {
          outputDir: 'karma_html',
          templatePath: __dirname+'/jasmine_template.html'
        } */
    });
};
