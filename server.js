'use strict';

var express        = require( 'express' );
var app            = express();
var bodyParser     = require( 'body-parser' );
var methodOverride = require( 'method-override' );

var port = process.env.PORT || 3000; // set our port

// get all data/stuff of the body (POST) parameters
app.use( bodyParser.json() );
app.use( bodyParser.json( { type: 'application/vnd.api+json' } ) );
app.use( bodyParser.urlencoded( { extended: true } ) );

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use( methodOverride( 'X-HTTP-Method-Override' ) );

// server static files
app.use( express.static( __dirname + '/public' ) );

// routes
require( './app/routes' )( app ); // pass our application into our routes

// start app
app.listen( port );
console.log( 'Magic happens on port ' + port );
exports = module.exports = app;
