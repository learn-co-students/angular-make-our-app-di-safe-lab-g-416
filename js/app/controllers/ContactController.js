function ContactController(heh, aVariableWow) {
	heh.name = 'Bill Gates';

	aVariableWow(function () {
		heh.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout']

angular
	.module('app')
	.controller('ContactController', ContactController);
