var StockWatcherApp = angular.module( 'StockWatcherApp', [ 'ngRoute' ] );

StockWatcherApp.config( [ '$routeProvider', function( $routeProvider ) {

	$routeProvider.

	when( '/', {
		templateUrl : 'views/home.html',
		controller  : 'MainController'
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
