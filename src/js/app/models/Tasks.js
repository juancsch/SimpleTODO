/**
 * Tasks
 */

define([ 'backbone',
         'app/models/Task'
], function( Backbone, Task ) {

    'use strict';

    var Tasks = Backbone.Collection.extend({

        url: 'data/tasks.json',
        model: Task,
        initialize: function( options ) {
        /* this.fetch({
            success: function(collection, response, options) {
                console.log(data);
            },
            error: function(collection, response, options) {
            }
        }); */
        }
    });

    return Tasks;
});
