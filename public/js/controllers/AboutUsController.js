'use strict';

StockWatcherApp.controller( 'AboutUsController', function( $scope ) {

	$scope.message = 'Welcome Investors and Traders! - About Us';

	$scope.members = [
		{
			'name'        : 'Rey Philip Regis',
			'picture'     : 'philip.jpg',
			'title'       : 'Senior Software Engineer',
			'description' : 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis' +
							'praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias' +
							'excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui' +
							'officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem' +
							'rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est' +
							'eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus,' +
							'omnis voluptas assumenda est, omnis dolor repellendus.'
		},
		{
			'name'        : 'Carter Binarao',
			'picture'     : 'carter.jpg',
			'title'       : 'Software Engineer',
			'description' : 'An enthusiastic and high-achieving individual who has completed a Bachelor Degree' +
							' major in Computer Science. Background stacks in ColdFusion, PHP, Javascript, Backbone' +
							', Marionette, C#, ASP.net, MySQL and MSSQL.'
		},
		{
			'name'        : 'Axon Moulic',
			'picture'     : 'axon.jpg',
			'title'       : 'Senior Quality Assurance Engineer',
			'description' : 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis' +
							'praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias' +
							'excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui' +
							'officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem' +
							'rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est' +
							'eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus,' +
							'omnis voluptas assumenda est, omnis dolor repellendus.'
		},
	];

} );