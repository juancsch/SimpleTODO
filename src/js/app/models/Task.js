/**
 * Task
 */

define([
    'backbone'
], function( Backbone ) {

    'use strict';

    var Task = Backbone.Model.extend({

        defaults: {
            text: 'nothing to do',
            completed: false
        }
    });

    return Task;
});
