function ContactController(rand1, rand2) {
	rand1.name = 'Bill Gates';

	rand2(function () {
		rand1.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout']

angular
	.module('app')
	.controller('ContactController', ContactController);
