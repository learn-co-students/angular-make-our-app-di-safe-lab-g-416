function ContactController(random, wordsOfMyChoosing) {
	random.name = 'Bill Gates';

	wordsOfMyChoosing(function () {
		random.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);