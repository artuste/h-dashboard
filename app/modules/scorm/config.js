(function () {
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', 'URLS', config]);

    function config($stateProvider, URLS) {
        var basePath = URLS.base;

        $stateProvider
            .state('scorm', {
                url: '/scorm',
                templateUrl: basePath + '/app/modules/scorm/scorm.tpl.html',
                controller: 'Scorm',
                controllerAs: 'vm'
            })
            // Klasa 1
            .state('klasa_1', {
                url: '/scorm/klasa_1',
                templateUrl: basePath + '/app/modules/scorm/tpl/scorm_1_3_klasa1/tpl.html',
                controller: 'Scorm',
                controllerAs: 'vm'
            })
            .state('klasa_1_ratings', {
                url: '/scorm/klasa_1/ratings',
                templateUrl: basePath + '/app/modules/scorm/tpl/scorm_1_3_klasa1/ratings.html',
                controller: 'Scorm',
                controllerAs: 'vm'
            })

            // Klasa 2
            .state('klasa_2', {
                url: '/scorm/klasa_2',
                templateUrl: basePath + '/app/modules/scorm/tpl/scorm_1_3_klasa2/tpl.html',
                controller: 'Scorm',
                controllerAs: 'vm'
            })
            .state('klasa_2_ratings', {
                url: '/scorm/klasa_2/ratings',
                templateUrl: basePath + '/app/modules/scorm/tpl/scorm_1_3_klasa2/ratings.html',
                controller: 'Scorm',
                controllerAs: 'vm'
            })

            // Klasa 3
            .state('klasa_3', {
                url: '/scorm/klasa_3',
                templateUrl: basePath + '/app/modules/scorm/tpl/scorm_1_3_klasa3/tpl.html',
                controller: 'Scorm',
                controllerAs: 'vm'
            })
            .state('klasa_3_ratings', {
                url: '/scorm/klasa_3/ratings',
                templateUrl: basePath + '/app/modules/scorm/tpl/scorm_1_3_klasa3/ratings.html',
                controller: 'Scorm',
                controllerAs: 'vm'
            });
    }

})();