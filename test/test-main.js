var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
    return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
    if (TEST_REGEXP.test(file)) {
        // Normalize paths to RequireJS module names.
        allTestFiles.push(pathToModule(file));
    }
});

require.config({
    // Karma serves files under /base, which is the basePath from your config file
    baseUrl: '/base',

    paths: {
        // dep de lib
        'jquery': 'src/bower_components/jquery/dist/jquery.min',
        'underscore': 'src/bower_components/underscore/underscore-min',
        'backbone': 'src/bower_components/backbone/backbone',
        'handlebars': 'src/bower_components/handlebars/handlebars.min',
        // dep de test
        // 'jasmine-sinon': 'src/bower_components/jasmine-sinon/lib/jasmine-sinon',
        // application
        'app': 'src/js/app'
    },

    shim: {
        jquery: {
            exports: "$"
        },
        underscore: {
            exports: "_"
        },
        handlebars: {
            exports: "Handlebars"
        }
    },

    // dynamically load all test files
    deps: allTestFiles,

    // we have to kickoff jasmine, as it is asynchronous
    callback: window.__karma__.start
});
