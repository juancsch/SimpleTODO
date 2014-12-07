/**
 * AppRouteSpec
 */

define([
    'app/AppRouter',
    'backbone'
    //, 'jasmine-sinon'
], function( AppRouter, Backbone ) {

    'use strict';

    describe("Especificacion del Router", function() {

        describe("Navegacion", function() {

            function createAppRouter() {

                /* var todoViewFactoryMock = {
                    createTodoView: function() {
                        console.log('*** Mock createTodoView');
                    }
                };
                var tasksViewFactoryMock = {
                    createTasksView: function() {
                        console.log('*** Mock createTasksView');
                        var TasksViewMock = function() {
                            this.loadTasks = function() {
                                console.log('*** Mock loadTasks');
                            };
                            this.removeView = function() {
                                console.log('*** Mock removeView');
                            };
                        };
                        return new TasksViewMock();
                    }
                }; */

                var todoViewFactoryMock = jasmine.createSpyObj('todoViewFactory', ['createTodoView']);
                var tasksViewMock = jasmine.createSpyObj('tasksView', ['loadTasks', 'removeView']);

                var tasksViewFactoryMock = jasmine.createSpyObj('tasksViewFactory', ['createTasksView']);
                tasksViewFactoryMock.createTasksView.and.returnValue( tasksViewMock );

                return new AppRouter({
                    todoViewFactory: todoViewFactoryMock,
                    tasksViewFactory: tasksViewFactoryMock
                }).start();
            }

            beforeEach( function() {

            });

            afterEach(function() {

                this.router.navigate("");
                Backbone.history.stop();
            });

            it("debería ir a la ruta 'home' con un hash en blanco", function() {

                spyOn( AppRouter.prototype, 'home' );

                this.router = createAppRouter();

                this.router.navigate("home", {trigger: true});

                expect( this.router.home ).toHaveBeenCalled();
            });

            it("debería ir a la ruta 'tasks' con un hash de 'tasks'", function() {

                spyOn( AppRouter.prototype, 'tasks' );

                this.router = createAppRouter();

                this.router.navigate("tasks", {trigger: true});

                expect( this.router.tasks ).toHaveBeenCalled();
            });
        });

        describe("Acciones", function() {

            var todoViewFactoryMock, tasksViewFactoryMock, tasksViewMock, router;

            beforeEach(function() {

                // TODO: usar fakes o stubs, o spy ...
                /* todoViewFactoryFake = {
                    createTodoView: function() {}
                };
                tasksViewFake = {
                    loadTasks: function() {},
                    removeView: function() {}
                };
                tasksViewFactoryFake = {
                    createTasksView: function() {
                        return tasksViewFake;
                    }
                }; */
                todoViewFactoryMock = jasmine.createSpyObj('todoViewFactory', ['createTodoView']);
                tasksViewMock = jasmine.createSpyObj('tasksView', ['loadTasks', 'removeView']);

                // tasksViewFactoryMock = {};
                // tasksViewFactoryMock.createTasksView = jasmine.createSpy('createTasksView').and.returnValue( tasksViewMock );
                tasksViewFactoryMock = jasmine.createSpyObj('tasksViewFactory', ['createTasksView']);
                tasksViewFactoryMock.createTasksView.and.returnValue( tasksViewMock );

                router = new AppRouter({
                    todoViewFactory: todoViewFactoryMock,
                    tasksViewFactory: tasksViewFactoryMock
                }).start();
            });

            afterEach(function() {

                router.navigate("");
                Backbone.history.stop();
            });

            it("debería instanciar la vista TasksView y cargar las tareas", function() {

                // spyOn( tasksViewFactoryMock, "createTasksView" ).and.callThrough();
                // spyOn( tasksViewMock, "loadTasks" );

                router.navigate("tasks", {trigger: true});

                expect( tasksViewFactoryMock.createTasksView ).toHaveBeenCalled();
                expect( tasksViewMock.loadTasks ).toHaveBeenCalled();
            });

            it("debería eliminar la vista TasksView", function() {

                // spyOn( tasksViewMock, "removeView" );

                router.navigate("tasks", {trigger: true});
                router.navigate("home", {trigger: true});

                expect( tasksViewMock.removeView ).toHaveBeenCalled();
            });
        });
    });
});
