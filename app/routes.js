'use strict';

var request = require( 'request' );

module.exports = function( app ) {

	// server routes
	// handle things like api calls
	// authentication routes

	// frontend routes
	// route to handle all angular requests
	app.get( '/', function( req, res ) {
		res.sendfile( './public/index.html' );
	});

	app.get( '/allstocks', function( req, res ) {
		request( 'http://phisix-api.appspot.com/stocks.json', function ( error, response, body ) {
			if ( !error && response.statusCode === 200 ) {
				res.send( body );
			} else {
				res.send( error );
			}
		} );
	});
};
