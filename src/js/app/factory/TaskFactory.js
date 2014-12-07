/**
 * TaskFactory
 */

define([
    'app/models/Task',
    'app/views/TaskView'
], function(Task, TaskView) {

    'use strict';

    return {

        createTask: function( data ) {

            return new Task( data );
        },
        createTaskView: function( task ) {

            return new TaskView({
                model: task
            });
        }
    };
});
