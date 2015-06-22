(function () {
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', 'URLS', config]);

    function config($stateProvider, URLS) {
        var basePath = URLS.base;

        $stateProvider
            .state('users', {
                url: '/users',
                templateUrl: basePath + '/app/modules/users/users.tpl.html',
                controller: 'Users',
                controllerAs: 'vm'
            })
            .state('userDetails', {
                url: '/user/details/:id',
                templateUrl: basePath + '/app/modules/users/users.details.tpl.html',
                controller: 'UsersDetails',
                controllerAs: 'vm'
            })
            .state('usersGenerator', {
                url: '/users/generator',
                templateUrl: basePath + '/app/modules/users/users.generator.tpl.html',
                controller: 'UsersGenerator',
                controllerAs: 'vm'
            });
    }

})();
