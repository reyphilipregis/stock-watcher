'use strict';

StockWatcherApp.controller( 'ReportsController', [ '$scope', '$q', 'StockService', '$timeout', function( $scope, $q, StockService, $timeout ) {
	var self  = this;

	$scope.message        = 'Welcome Investors and Traders! - Reports';
	self.secondsToRefresh = 0;
	self.secondsMax       = 3600000; // 1 hour

	// get all the stocks from the PSEi web API
	var stocksUpdator = function () {

		$timeout( function() {

			StockService.getAllStocks().then( function ( result ) {
				$scope.resultObj = result;
			} );

			stocksUpdator();

			self.secondsToRefresh = self.secondsMax;

		}, self.secondsToRefresh );

	};

	stocksUpdator();

} ] );
