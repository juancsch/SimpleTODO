/**
 * TasksSpec
 */

define([
    "app/models/Tasks"
], function( Tasks ) {

    'use strict';

    describe("Especificacion de la collection Tasks", function() {

        beforeEach(function() {

            this.data = [{
                "text": "ir a la compra",
                "completed": false
            }];
            this.server = sinon.fakeServer.create();
        });

        afterEach(function() {

            this.server.restore();
        });

        it("al hacer un 'fetch' debería lanzar un evento de reset y obtener los datso del servidor", function() {

            var callback = sinon.spy();

            // Set how the fake server will respond
            // This reads: a GET request for /episode/123
            // will return a 200 response of type
            // application/json with the given JSON response body
            this.server.respondWith(
                "GET",
                "data/tasks.json",
                [
                    200,
                    { "Content-Type": "application/json" },
                    JSON.stringify( this.data )
                ]
            );

            var tasks = new Tasks();

            // Bind to the change event on the model
            tasks.on('reset', callback);

            // makes an ajax request to the server
            tasks.fetch({
                reset: true
            });

            // Fake server responds to the request
            this.server.respond();

            // Expect that the spy was called with the new model
            expect(callback.called).toBeTruthy();

            /* console.log( callback );
            console.log( callback.getCall(0) );
            console.log( callback.getCall(0).args ); */

            expect( callback.getCall(0).args[0].toJSON() ).toEqual( this.data );
        });
    });
});
