StockWatcherApp.service( 'FeedsService', function( $http, $q ) {

	// responsible for getting the feeds
	this.getFeeds = function() {
		var deferred = $q.defer();

		$http.get( '/feeds' ).

		success( function( data ) {

		  	deferred.resolve( data );

		}).error( function( msg, code ) {

			deferred.reject( msg );

		});

		return deferred.promise;
	};

} );