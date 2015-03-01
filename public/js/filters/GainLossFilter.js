'use strict';

StockWatcherApp.filter( 'GainLossFilter', function() {

	return function( percentChange ) {

		if ( percentChange < 0 ) {
			return 'fa-arrow-down';
		} else if ( percentChange > 0 ) {
			return 'fa-arrow-up';
		}

		return '';
	};

} );
