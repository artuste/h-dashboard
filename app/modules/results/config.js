(function () {
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', 'URLS', config]);

    function config($stateProvider, URLS) {
        var basePath = URLS.base;

        $stateProvider
            .state('results', {
                url: '/results',
                templateUrl: basePath + '/app/modules/results/results.tpl.html',
                controller: 'Results',
                controllerAs: 'vm'
            })
            .state('resultsDetails', {
                url: '/results/:id',
                templateUrl: basePath + '/app/modules/results/results.details.tpl.html',
                controller: 'ResultsDetails',
                controllerAs: 'vm'
            });
    }

})();