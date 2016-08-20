/**
 * Twitch Viewer API Service
 */

'use strict';

var angular = require('angular');

module.exports = 

	function($http){

		var apiCall = function(type, user) {
			var url = 'https://api.twitch.tv/kraken/';
			if (type == 'users') url += type + '/' + user
			else if (type == 'streams') url += type + '/' + user
			
			return $http.jsonp(url, {
				params: {
					callback: 'JSON_CALLBACK'
				}
			});
		};
		
		return {
			apiCall: apiCall
		};

	};