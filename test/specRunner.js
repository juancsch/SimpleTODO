/**
 * specRunner.js
 */

require.config({
    baseUrl: 'specs',
    // urlArgs: 'cb=' + Math.random(),
    paths: {
        // dep de testing
        // 'domready': '../../src/bower_components/requirejs-domready/domReady',
        'jasmine': '../../src/bower_components/jasmine/lib/jasmine-core/jasmine',
        'jasmine-html': '../../src/bower_components/jasmine/lib/jasmine-core/jasmine-html',
        'jasmine-boot': '../../src/bower_components/jasmine/lib/jasmine-core/boot',
        'sinon': '../../src/bower_components/sinonjs/sinon',
        // 'jasmine-sinon': '../../src/bower_components/jasmine-sinon/lib/jasmine-sinon',
        // jasmine-backbone ...
        // jasmine-jquery ...
        // dep de lib
        'jquery': '../../src/bower_components/jquery/dist/jquery.min',
        'backbone': '../../src/bower_components/backbone/backbone',
        'underscore': '../../src/bower_components/underscore/underscore-min',
        'handlebars': '../../src/bower_components/handlebars/handlebars.min',
        // application
        'app': '../../src/js/app'
    },
    shim: {
        jasmine: {
            exports: 'jasmineRequire'
        },
        'jasmine-html': {
            deps: ['jasmine'],
            exports: 'jasmineRequire'
        },
        'jasmine-boot': {
            deps: ['jasmine', 'jasmine-html'],
            exports: 'jasmineRequire'
        },
        sinon: {
            exports: 'sinon'
        },
        /* 'jasmine-sinon': {
            deps: ['jasmine', 'sinon'],
            exports: 'sinon'
        }, */
        jquery: {
            exports: "$"
        },
        underscore: {
            exports: "_"
        },
        handlebars: {
            exports: "Handlebars"
        }
    }
});

// require(['domready!', 'jasmine-boot'], function(document, boot) {
// lo podiamos poner en la index.html y entonces ser implicita, como en karma, tambien otros FW de testing
// como sinon, asi que podian ser globales las dependencias de testing como en karma o mvn ... NO SEAS FIJO
require(['jasmine-boot', 'sinon'], function() {

    /* var specs = [
        'TaskSpec',
        'TasksSpec',
        'AppRouteSpec'
    ];
    require(specs, function(spec) { */
    require([
        'TaskSpec',
        'TasksSpec',
        'AppRouteSpec'
    ], function() {

        window.onload();
    });
});
