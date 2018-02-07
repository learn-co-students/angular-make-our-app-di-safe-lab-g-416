function ContactController(random, evenMoreRandom) {
	random.name = 'Bill Gates';

	evenMoreRandom(function () {
		random.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];


angular
	.module('app')
	.controller('ContactController', ContactController);