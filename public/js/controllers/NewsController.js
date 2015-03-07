'use strict';

StockWatcherApp.controller( 'NewsController', [ '$scope', '$q', 'FeedsService', function( $scope, $q, FeedsService ) {

	$scope.message = 'Welcome Investors and Traders! - News';

	FeedsService.getFeeds().then( function ( result ) {
		$scope.feeds = result.items;
	} );

} ] );
