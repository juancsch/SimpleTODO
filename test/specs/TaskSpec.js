/**
 * TaskSpec
 */

define([
    'app/models/Task'
], function( Task ) {

    'use strict';

    describe("Especificacion del modelo Task", function() {

        beforeEach(function() {

            // that = this;
            // require([ 'app/models/Task' ], function( Task ) {
            this.task = new Task();
            //});
        });

        it("los valores iniciales son 'nothing to do' y completed=false", function() {

            expect( this.task.get('text') ).toEqual( 'nothing to do' );
            expect( this.task.get('completed') ).toBeFalsy( false );
        });

        it("los valores de la url debería componerse con el id del objeto y su urlRoot", function() {

            this.task.urlRoot = '/data/tasks';
            var id = '1';
            this.task.set('id', id);
            expect( this.task.url() ).toEqual( '/data/tasks/'+id );
        });

        it("los valores de la url debería componerse con el id del objeto y la url de la collection a la que pertenece", function() {

            var collectionStub = {
                url: "/collection/tasks"
            };
            this.task.collection = collectionStub;
            var id = '1';
            this.task.set('id', id);
            expect( this.task.url() ).toEqual( '/collection/tasks/'+id );
        });
    });
});
