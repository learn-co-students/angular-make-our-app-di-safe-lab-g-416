function ContactController(varOne, varTwo) {
	varOne.name = 'Bill Gates';

	varTwo(function () {
		varOne.name = 'Steve Jobs';
	}, 2000);
}

ContactController.$inject = ['$scope', '$timeout']

angular
	.module('app')
	.controller('ContactController', ContactController);