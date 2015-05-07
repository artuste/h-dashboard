(function () {
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', 'URLS', config]);

    function config($stateProvider, URLS) {
        var basePath = URLS.base;

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: basePath + '/app/modules/login/login.tpl.html',
                controller: 'Login',
                controllerAs: 'vm'
            });
    }

})();
