/**
 * Twitch Viewer User Filter
 */

'use strict';

var angular = require('angular');

module.exports = 

	function(){
		return function(users, type){
			switch(type){
				case 'online':
						return users.filter(function(user){
							return user.streams.stream !== null && !user.streams.error;
						});
					break;
				case 'offline':
						return users.filter(function(user){
							return user.streams.stream == null;
						});
					break;
				default:
					return users;
			}
		};
	};
