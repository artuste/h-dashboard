(function () {
    "use strict";

    angular.module('app.login')
        .controller('Login', Login);

    Login.$inject = ['$rootScope', '$state', 'logger', 'Integration'];

    function Login($rootScope, $state, logger, Integration) {
        /* jshint validthis: true */
        var vm = this;

        vm.user = {};

        // temporary
        vm.copy = function () {
            vm.user.username = 'WebClient';
            vm.user.password = '70fdb7b56227077c8df02c7a576f8937';
        };

        vm.login = login;

        activate();

        function activate() {

        }

        function login() {
            var login = {
                login: vm.user.username,
                password: vm.user.password,
                clientId: 'WebClient',
                clientSecret: 'i%^+g5Xm7F.^^-F'
            };

            Integration.init(login)
                .then(function () {
                    $state.go('scorm');
                    Integration.startSession();

                    $rootScope.oauth2 = {
                        login: localStorage.getItem('login'),
                        token: localStorage.getItem('access_token')
                    };

                    //logger.success('Zostałeś poprawnie zalogowany <b>' + localStorage.getItem('login') + '</b>');
                }, function () {
                    logger.error('Błąd!');
                });
        }
    }

})();