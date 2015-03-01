'use strict';

StockWatcherApp.controller( 'MainController', [ '$scope', '$q', 'StockService', '$timeout', function( $scope, $q, StockService, $timeout ) {
	var self  = this;
	var label = 'Philippines Stock Exchange';

	$scope.message        = 'Welcome Investors and Traders! - Main';
	self.secondsToRefresh = 0;
	self.secondsMax       = 60000; // 1 minute

	// get all the stocks from the PSEi web API
	var stocksUpdator = function () {

		$timeout( function() {

			StockService.getAllStocks().then( function ( result ) {
				$scope.pseLabel  = label;
				//$scope.stockDate = result.as_of;
				$scope.stockDate = new Date();
				$scope.resultObj = result;
			} );

			stocksUpdator();

			self.secondsToRefresh = self.secondsMax;

		}, self.secondsToRefresh );

	};

	stocksUpdator();
} ] );
