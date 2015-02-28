angular.module( 'appRoutes', [ ] ).config( [ '$routeProvider', '$locationProvider', function( $routeProvider, $locationProvider ) {

	$routeProvider

		// home page
		.when( '/', {
			templateUrl : 'views/home.html',
			controller  : 'MainController'
		} )

		.when( '/dashboard', {
			templateUrl : 'views/dashboard.html',
			controller  : 'DashboardController'
		} )

		.when( '/aboutus', {
			templateUrl : 'views/aboutus.html',
			controller  : 'AboutUsController'
		} );

	$locationProvider.html5Mode( true );

} ] );
