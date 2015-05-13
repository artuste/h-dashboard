(function () {
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', 'URLS', config]);

    function config($stateProvider, URLS) {
        var basePath = URLS.base,
            secondPath = '/app/modules/scorm/tpl',
            scorm_1_3_klasa_1 = secondPath + '/scorm_1_3_klasa1/lpc_pl-test_lpc_klasa1/toc/toc-scorm13.html',
            scorm_1_3_klasa_2 = secondPath + '/scorm_1_3_klasa2/lpc_pl-test_lpc_klasa2/toc/toc-scorm13.html',
            scorm_1_3_klasa_3 = secondPath + '/scorm_1_3_klasa3/lpc_pl-test_lpc_klasa3/toc/toc-scorm13.html';

        $stateProvider
            .state('scorm', {
                url: '/scorm',
                templateUrl: basePath + '/app/modules/scorm/scorm.tpl.html',
                controller: 'Scorm',
                controllerAs: 'vm'
            })
            .state('scorm_1_3_klasa_1', {
                url: '/scorm/scorm_1_3_klasa_1',
                templateUrl: basePath + scorm_1_3_klasa_1,
                controller: 'Scorm',
                controllerAs: 'vm'
            })
            .state('scorm_1_3_klasa_2', {
                url: '/scorm/scorm_1_3_klasa_2',
                templateUrl: basePath + scorm_1_3_klasa_2,
                controller: 'Scorm',
                controllerAs: 'vm'
            })
            .state('scorm_1_3_klasa_3', {
                url: '/scorm/scorm_1_3_klasa_3',
                templateUrl: basePath + scorm_1_3_klasa_3,
                controller: 'Scorm',
                controllerAs: 'vm'
            });
    }

})();
