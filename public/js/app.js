var StockWatcherApp = angular.module( 'StockWatcherApp', [ 'ngRoute' ] );

StockWatcherApp.config( [ '$routeProvider', function( $routeProvider ) {

	$routeProvider.

	when( '/', {
		templateUrl : 'views/home.html'
	} ).

	when( '/dashboard', {
		templateUrl : 'views/dashboard.html',
		controller  : 'DashboardController'
	} ).

	when( '/aboutus', {
		templateUrl : 'views/aboutus.html',
		controller  : 'AboutUsController'
	} );

} ] );
