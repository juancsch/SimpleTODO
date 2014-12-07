/**
 * AppRouter
 */

define([
    'jquery',
    'backbone'
], function($, Backbone) {

    'use strict';

    var AppRouter = Backbone.Router.extend({

        routes: {
            "home": "home",
            "tasks": "tasks"
        },
        initialize: function( options ) {

            this.todoListDiv = $('#todo-list');

            // this.todoViewFactory = options.todoViewFactory;
            options.todoViewFactory.createTodoView();
            this.tasksViewFactory = options.tasksViewFactory;
        },
        start: function() {

            // this.todoView = this.todoViewFactory.createTodoView();
            Backbone.history.start();
            return this;
        },
        home: function() {

            if( this.tasksView ) {
                this.tasksView.removeView();
            }
            this.todoListDiv.html( '<ul><a href="#tasks">Load tasks</a></ul>' );
        },
        tasks: function() {

            this.tasksView = this.tasksViewFactory.createTasksView();
            this.todoListDiv.html( this.tasksView.loadTasks() );
        }
    });

    return AppRouter;
});
