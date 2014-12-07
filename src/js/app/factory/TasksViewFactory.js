/**
 * TasksViewFactory
 */

define([
    'app/factory/TaskFactory',
    'app/models/Tasks',
    'app/views/TasksView'
], function(TaskFactory, Tasks, TasksView) {

    'use strict';

    return {

        createTasksView: function() {

            return new TasksView({
                collection: new Tasks(),
                taskFactory: TaskFactory
            });
        }
    };
});
