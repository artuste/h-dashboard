(function () {
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', config]);

    function config($stateProvider) {

        $stateProvider
            .state('users', {
                url: '/users',
                templateUrl: 'app/modules/users/users.tpl.html',
                controller: 'Users',
                controllerAs: 'vm'
            });
    }

})();
