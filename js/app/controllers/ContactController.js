function ContactController(theScope, theTimeout) {
	theScope.name = 'Bill Gates';

	theTimeout(function () {
		theScope.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout']

angular
	.module('app')
	.controller('ContactController', ContactController);
