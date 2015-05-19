(function () {
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', 'URLS', config]);

    function config($stateProvider, URLS) {
        var basePath = URLS.base;

        $stateProvider
            .state('mood-first', {
                url: '/mood-first',
                templateUrl: basePath + '/app/modules/mood/mood.first.tpl.html',
                controller: 'MoodFirst',
                controllerAs: 'vm'
            })
            .state('mood-last', {
                url: '/mood-last',
                templateUrl: basePath + '/app/modules/mood/mood.last.tpl.html',
                controller: 'MoodLast',
                controllerAs: 'vm'
            });
    }

})();