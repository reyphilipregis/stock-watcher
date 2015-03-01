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

	when( '/news', {
		templateUrl : 'views/news.html',
		controller  : 'NewsController'
	} ).

	when( '/reports', {
		templateUrl : 'views/reports.html',
		controller  : 'ReportsController'
	} ).

	when( '/aboutus', {
		templateUrl : 'views/aboutus.html',
		controller  : 'AboutUsController'
	} );

} ] );
