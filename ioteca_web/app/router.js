app

.config(function ($httpProvider) {
	$httpProvider.defaults.xsrfCookieName = 'csrftoken';
	$httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
})
.config(function ($resourceProvider) {
	$resourceProvider.defaults.stripTrailingSlashes = false;
})

.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/nof");

	$stateProvider

	.state("test1", {
		url:"/test",
		templateUrl:"app/views/test1.html"
	})

	.state("no", {
		url:"/nof",
		templateUrl:"app/views/nof.html"
	})

	.state("categoria", {
		url:"/categoria",
		templateUrl:"app/views/categoria.html"
	});
});