StockWatcherApp.controller( 'MainController', [ '$scope', '$q', 'StockService', function( $scope, $q, StockService ) {

	$scope.message = 'Welcome Investors and Traders! - Main';

	// get all the stocks from the PSEi web API
	StockService.getAllStocks().then( function ( result ) {
		$scope.pseLabel  = 'Philippines Stock Exchange';
		$scope.stockDate = result.as_of;
		$scope.resultObj = result;
	} );

} ] );