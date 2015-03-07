'use strict';

var parser  = require('blindparser');
var request = require( 'request' );

module.exports = function( app ) {

	// query all stocks
	app.get( '/allstocks', function( req, res ) {
		request( 'http://phisix-api.appspot.com/stocks.json', function ( error, response, body ) {
			if ( !error && response.statusCode === 200 ) {
				res.send( body );
			} else {
				res.send( error );
			}
		} );
	} );

	// query feeds
	app.get( '/feeds', function( reqnode, respnode ) {
		parser.parseURL( 'http://www.bworldonline.com/RSS/banking.rss' , function( err, out ) {
		   respnode.send( out );
		} );
	} );

	// default routes
	app.get( '*', function( req, res ) {
		res.sendfile( './public/index.html' );
	} );

};
