// create the module and name it phpro
// also include ngRoute for all our routing needs
var phpro = angular.module('phpro', ['ngRoute']);

// configure our routes
phpro.config(function($routeProvider) {

$routeProvider
        // route for the index page
        .when('/', {
                templateUrl : 'templates/index.html',
                controller  : 'mainCtrl'
        })

        // route for the FAQ page
        .when('/faq', {
        templateUrl : 'templates/faq.html',
        controller  : 'faqCtrl'
        })

        // route for the contact page
        .when('/contact', {
                templateUrl : 'templates/contact.html',
                controller  : 'contactCtrl'
        });
});

// create the controller and inject Angular's $scope
phpro.controller('mainCtrl', function($scope) {
        // create a message to display in our view
        $scope.heading = 'Benvindos ao curso de AngularJS.';
        $scope.message = 'Aqui você vai mudar seu jeito de pensar.';
});

phpro.controller('faqCtrl', function($scope) {
        $scope.heading = 'Perguntas Frequentes';
        $scope.message = 'Combinando productos y servicios para el éxito de su empresa.';
});

phpro.controller('contactCtrl', function($scope) {
        $scope.heading = 'Contato';
        $scope.message = 'Contato: Lyndon Tavares';
});
