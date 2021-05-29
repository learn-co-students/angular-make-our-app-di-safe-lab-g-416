function ContactController(first, second) {
	first.name = 'Bill Gates';

	second(function () {
		first.name = 'Steve Jobs';
	}, 5000);
}
ContactController.$inject = ['$scope', '$timeout']

angular
	.module('app')
	.controller('ContactController', ContactController);
