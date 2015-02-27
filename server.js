'use strict';

var Hapi    = require( 'hapi' );
var Good    = require( 'good' );
var stocks  = require( './stocks' );

var server = new Hapi.Server();
server.connection( { port: 3000 } );

server.route( {
    method  : 'GET',
    path    : '/',
    handler : function ( req, reply ) {
    	stocks.getAllStocks( reply );
    }
} );

server.register( {
    register : Good,
    options  : {
        reporters : [ {
            reporter : require( 'good-console' ),
            args     : [ { log: '*', response: '*' } ]
        } ]
    }
}, function ( err ) {
    if ( err ) {
        throw err; // something bad happened loading the plugin
    }

    server.start( function () {
        server.log( 'info', 'Server running at: ' + server.info.uri );
    } );
} );
