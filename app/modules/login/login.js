(function () {
    "use strict";

    angular.module('app.login')
        .controller('Login', Login);

    Login.$inject = [
        '$rootScope',
        '$filter',
        'logger',
        'Integration',
        'sessionService',
        'ResultsData'
    ];

    function Login($rootScope, $filter, logger, Integration, sessionService, ResultsData) {
        /* jshint validthis: true */
        var vm = this;

        vm.users = {};
        vm.loader = false;

        vm.login = login;

        vm.catch = function () {
            vm.selectedUser = $filter('filter')(vm.users, {userId: vm.user})[0];
        };

        activate();

        function activate() {
            return ResultsData.getUsersList()
                .then(function (res) {
                    vm.users = res.users;
                });
        }

        function login() {
            vm.loader = true;

            var login = {
                login: 'WebClient',
                password: '70fdb7b56227077c8df02c7a576f8937',
                clientId: 'WebClient',
                clientSecret: 'i%^+g5Xm7F.^^-F'
            };

            Integration.init(login)
                .then(function () {

                    Integration.selectUser(vm.selectedUser);
                    Integration.startSession();

                    $rootScope.oauth2 = sessionService.getUserData();

                    vm.loader = false;

                    logger.success('Zostałeś poprawnie zalogowany <b>' + sessionService.getUserData().login + '</b>');
                    logger.info('Sesja została rozpoczęta');
                }, function () {
                    logger.error('Błąd!');
                    vm.loader = false;
                });
        }
    }

})();