/*
 * Main
 */

require.config({
    baseUrl: ".",
    paths: {
        text: "bower_components/text/text",
        jquery: "bower_components/jquery/dist/jquery.min",
        bootstrap: "bower_components/bootstrap/dist/js/bootstrap.min",
        underscore: "bower_components/underscore/underscore-min",
        backbone: "bower_components/backbone/backbone",
        handlebars: "bower_components/handlebars/handlebars.min",
        app: 'js/app',
        templates: 'js/templates'
    },
    shim: {
        jquery: {
            exports: "$"
        },
        underscore: {
            exports: "_"
        },
        bootstrap: {
            deps: ['jquery']
        },
        handlebars: {
            exports: "Handlebars"
        }
    }
});

require([
    'app/AppRouter',
    'app/views/TodoView',
    'app/factory/TasksViewFactory'
], function(AppRouter, TodoViewFactory, TasksViewFactory) {

    'use strict';

    new AppRouter({
        todoViewFactory: TodoViewFactory,
        tasksViewFactory: TasksViewFactory
    }).start().navigate("home", {trigger: true});
});
