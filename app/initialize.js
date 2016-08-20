/**
 * App Entry Point
 */

'use strict';

var angular = require('angular');
var ngAnimate = require('angular-animate');

angular.module('twitchViewer', [ngAnimate]);

angular.
	module('twitchViewer').
	controller('ViewController', 
		[
			'$scope', 
			'twitchAPI', 
			require('controller')
		]);

angular.
	module('twitchViewer').
	factory('twitchAPI', require('services'));

angular.
	module('twitchViewer').
	filter('streaming', require('filters'));