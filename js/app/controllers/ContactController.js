function ContactController(blah, blah2) {
	blah.name = 'Bill Gates';

	blah2(function () {
		blah.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);
