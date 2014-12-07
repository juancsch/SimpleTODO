/**
 * TaskView
 */

define([
    'backbone',
    'handlebars'
], function( Backbone, Handlebars ) {

    'use strict';

    var TaskView = Backbone.View.extend({

        tagName: 'li',

        template: Handlebars.compile(
            '<input type="checkbox"{{#if completed}} checked="checked"{{/if}}class="toggleCompleted"> <span class="strikeable{{#if completed}} strike{{/if}}">{{text}}</span>'
            + '<button id="remove-task" type="button" class="close"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>'
        ),

        events: {
            'click .toggleCompleted': 'toggleCompleted',
            'click #remove-task': 'removeTask',
        },

        initialize: function (options) {

            this.listenTo(this.model, 'remove', this.removeView);
            this.listenTo(this.model, 'change:completed', this.strikeTask);
        },

        removeView: function() {

            this.remove();
        },

        removeTask: function( event ) {

            this.removeView();
            this.trigger('todo:remove-task', this.model);
        },

        strikeTask: function() {

            this.$('span.strikeable').toggleClass( "strike" );
            this.$('[type=checkbox]').prop( "checked", this.model.get('completed') );
        },

        toggleCompleted: function( event ) {

            this.model.set('completed', this.$('[type=checkbox]').prop( "checked" ) );
        },

        render: function() {

            this.$el.html( this.template( this.model.toJSON() ) );
            return this;
        }
    });

    return TaskView;
});
