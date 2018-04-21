function ContactController(pincoPanco, pancoPinco) {
	pincoPanco.name = 'Bill Gates';

	pancoPinco(function () {
		pincoPanco.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);
