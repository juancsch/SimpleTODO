/**
 * TodoView
 */

define([
    'underscore',
    'backbone'
], function( _, Backbone ) {

    'use strict';

    var TodoView = Backbone.View.extend({

        el: '#todo-app',

        events: {
            "click #toggle-visibility": "toggleVisivilityTasks",
            "click #add-task": "clickAddTask",
            "click #completed-all-tasks": "completedAllTasks",
            "click #remove-all-completed": "removeAllTasksCompleted"
        },

        initialize: function( options ) {

            this.$taskText = this.$("input[name='task-text']");
            this.$toggleVisibility = this.$("#toggle-visibility");
            this.$todoPanel = this.$("#todo-panel");
        },

        toggleVisivilityTasks: function( event ) {

            this.$todoPanel.slideToggle({
                complete: _.bind( function() {
                    if( this.isVisible() ) {
                        this.$toggleVisibility.text('Hide Tasks');
                    } else {
                        this.$toggleVisibility.text('Show Tasks');
                    }
                }, this)
            });
        },

        isVisible: function() {

            // return ( this.$el.css('display') !== 'none' );
            return ( this.$todoPanel.is( ':visible' ) );
        },

        clickAddTask: function( event ) {

            Backbone.trigger("todo:add-task", this.$taskText.val());
        },

        completedAllTasks: function( event ) {

            Backbone.trigger("todo:completed-all-tasks");
        },

        removeAllTasksCompleted: function( event ) {

            Backbone.trigger("todo:remove-all-tasks-completed", );
        }
    });

    return {

        createTodoView:  function() {

            return new TodoView();
        }
    };
});
