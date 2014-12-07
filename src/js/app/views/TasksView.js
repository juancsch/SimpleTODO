/**
 * TasksView
 */

define([
    'underscore',
    'backbone'
], function( _, Backbone ) {

    'use strict';

    var TasksView = Backbone.View.extend({

        tagName: 'ul',

        initialize: function( options ) {

            this.taskViews = [];

            this.taskFactory = options.taskFactory;

            this.listenTo(this.collection, 'add', this.renderTask);
            this.listenTo(this.collection, 'reset', this.render);
            this.listenTo(this.collection, 'request', this.loading);
            this.listenTo(this.collection, 'error', this.showError);

            this.listenTo(Backbone, "todo:add-task", this.addTask);
            this.listenTo(Backbone, "todo:completed-all-tasks", this.completedAllTasks);
            this.listenTo(Backbone, "todo:remove-all-tasks-completed", this.removeAllTasksCompleted);
        },

        loadTasks: function() {

            this.collection.fetch({
                reset: true
            });
            return this.el;
        },

        removeView: function() {

            _.invoke( this.taskViews, 'remove' );
            this.remove();
        },

        addTask: function( text ) {

            this.collection.add( this.taskFactory.createTask({
                text: text,
                completed: false
            }));
        },

        removeAllTasksCompleted: function( event ) {

            var completeds = this.collection.where({
                completed: true
            });
            _.each(completeds, function( completed ) {
                this.removeTask( completed );
            }, this);
        },

        completedAllTasks: function( event ) {

            var notCompleteds = this.collection.where({
                completed: false
            });
            _.each(notCompleteds, function( notCompleted ) {
                notCompleted.set('completed', true);
            }, this);
        },

        removeTask: function ( task ) {

            this.collection.remove( task );
        },

        showError: function() {

            this.$el.empty();
            this.$el.text( "Error !!!" );
        },

        loading: function() {

            this.$el.empty();
            this.$el.text( "Loading ..." );
        },

        render: function() {

            this.$el.empty();
            _.each(this.collection.models, function( task ) {
                this.renderTask( task );
            }, this);
        },

        renderTask: function( task ) {

            var taskView = this.taskFactory.createTaskView( task );
            taskView.on('todo:remove-task', this.removeTask, this);
            this.$el.append( taskView.render().el );
            this.taskViews.push( taskView );
        }
    });

    return TasksView;
});
