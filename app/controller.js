/**
 * Twitch Viewer's Single Controller
 */

var angular = require('angular');

module.exports = 

	function($scope, twitchAPI){

		//Preset list of users to load into empty array
		var USERS = ["ESL_SC2", "freecodecamp", "codingrainbow","SkyPython","postcrypt", "math08_", "Furtwenty", "DevWars", "brunofin", "comster404"];
		$scope.userData = [];
		$scope.searchText = "";

		// Build the list of users by...
		var buildUserData = function buildUserData(list){
			list.forEach(function(user){
				getUserData(user);
			});
		};

		// ...getting the user data, then...
		var getUserData = function getUserData(user) {
			return twitchAPI.apiCall('users', user)
				.then(function(data){
					appendStreamData(user, data.data);
				});
		};

		// ...appending the stream data to each user.
		var appendStreamData = function appendStreamData(user, data){
			return twitchAPI.apiCall('streams', user)
				.then(function(dataToAppend){
					data.streams = dataToAppend.data;
					$scope.userData.push(data);
				});
		};

		$scope.filterList = 'all';

		$scope.isStreaming = function(user){
			if(user.streams.error) return 2;
			else if(user.streams.stream) return -1;
			else return 1;
		};

		$scope.goToProfile = function(user){
			window.open('https://www.twitch.tv/' + user.name, '_blank');
		}

		buildUserData(USERS);
		
	};