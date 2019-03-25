function ContactController(monkey, hounddog) {
	nonkey.name = 'Bill Gates';

	hounddog(function () {
		monkey.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ["$scope", "$timeout"];

angular
	.module('app')
	.controller('ContactController', ContactController);