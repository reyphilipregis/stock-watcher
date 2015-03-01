StockWatcherApp.service( 'StockService', function( $http, $q ) {

	// responsible for getting the stocks from the API
	this.getAllStocks = function() {
		var deferred = $q.defer();

		$http.get( '/allstocks' ).

		success( function( data ) {

		  	deferred.resolve( data );

		}).error( function( msg, code ) {

			deferred.reject( msg );

		});

		return deferred.promise;
	};

} );