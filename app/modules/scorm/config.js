(function () {
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', 'URLS', config]);

    function config($stateProvider, URLS) {
        var basePath = URLS.base;

        $stateProvider
            .state('scorm-form', {
                url: '/scorm/form',
                templateUrl: basePath + '/app/modules/scorm/scorm.form.html',
                controller: 'Scorm',
                controllerAs: 'vm'
            })

            .state('scorm', {
                url: '/scorm',
                templateUrl: basePath + '/app/modules/scorm/scorm.tpl.html',
                controller: 'Scorm',
                controllerAs: 'vm'
            })

            // Klasa 1
            .state('klasa_1', {
                url: '/scorm/klasa/1',
                templateUrl: basePath + '/app/modules/scorm/tpl/klasa1_tpl.html',
                controller: 'Scorm',
                controllerAs: 'vm'
            })

            // Klasa 2
            .state('klasa_2', {
                url: '/scorm/klasa/2',
                templateUrl: basePath + '/app/modules/scorm/tpl/klasa2_tpl.html',
                controller: 'Scorm',
                controllerAs: 'vm'
            })

            // Klasa 3
            .state('klasa_3', {
                url: '/scorm/klasa/3',
                templateUrl: basePath + '/app/modules/scorm/tpl/klasa3_tpl.html',
                controller: 'Scorm',
                controllerAs: 'vm'
            });
    }

})();