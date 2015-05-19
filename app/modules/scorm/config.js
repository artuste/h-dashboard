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
                url: '/scorm/klasa/1',
                templateUrl: basePath + '/app/modules/scorm/tpl/scorm_1_3_klasa1/tpl.html',
                controller: 'Scorm',
                controllerAs: 'vm'
            })
            //.state('klasa_1_ratings', {
            //    url: '/scorm/klasa/1/ratings',
            //    templateUrl: basePath + '/app/modules/scorm/tpl/scorm_1_3_klasa1/ratings.html',
            //    controller: 'Scorm',
            //    controllerAs: 'vm'
            //})
            //.state('klasa_1_form', {
            //    url: '/scorm/klasa/1/form',
            //    templateUrl: basePath + '/app/modules/scorm/tpl/scorm_1_3_klasa1/form.html',
            //    controller: 'Scorm',
            //    controllerAs: 'vm'
            //})

            // Klasa 2
            .state('klasa_2', {
                url: '/scorm/klasa/2',
                templateUrl: basePath + '/app/modules/scorm/tpl/scorm_1_3_klasa2/tpl.html',
                controller: 'Scorm',
                controllerAs: 'vm'
            })
            //.state('klasa_2_ratings', {
            //    url: '/scorm/klasa/2/ratings',
            //    templateUrl: basePath + '/app/modules/scorm/tpl/scorm_1_3_klasa2/ratings.html',
            //    controller: 'Scorm',
            //    controllerAs: 'vm'
            //})
            //.state('klasa_2_form', {
            //    url: '/scorm/klasa/2/form',
            //    templateUrl: basePath + '/app/modules/scorm/tpl/scorm_1_3_klasa2/form.html',
            //    controller: 'Scorm',
            //    controllerAs: 'vm'
            //})

            // Klasa 3
            .state('klasa_3', {
                url: '/scorm/klasa/3',
                templateUrl: basePath + '/app/modules/scorm/tpl/scorm_1_3_klasa3/tpl.html',
                controller: 'Scorm',
                controllerAs: 'vm'
            })
            //.state('klasa_3_ratings', {
            //    url: '/scorm/klasa/3/ratings',
            //    templateUrl: basePath + '/app/modules/scorm/tpl/scorm_1_3_klasa3/ratings.html',
            //    controller: 'Scorm',
            //    controllerAs: 'vm'
            //})
            //.state('klasa_3_form', {
            //    url: '/scorm/klasa/3/form',
            //    templateUrl: basePath + '/app/modules/scorm/tpl/scorm_1_3_klasa3/form.html',
            //    controller: 'Scorm',
            //    controllerAs: 'vm'
            //});

        .state('scorm-form', {
            url: '/scorm/form',
            templateUrl: basePath + '/app/modules/scorm/scorm.form.html',
            controller: 'Scorm',
            controllerAs: 'vm'
        })
    }

})();