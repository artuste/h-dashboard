(function () {
    "use strict";

    angular.module('app.login')
        .controller('Login', Login);

    Login.$inject = ['$rootScope', '$scope', '$state', 'logger', 'Integration', 'sessionService'];

    function Login($rootScope, $scope, $state, logger, Integration, sessionService) {
        /* jshint validthis: true */
        var vm = this;

        vm.user = {};
        vm.loader = false;

        // temporary
        vm.copy = function () {
            vm.user.username = 'WebClient';
            vm.user.password = '70fdb7b56227077c8df02c7a576f8937';
        };

        vm.login = login;

        activate();

        function activate() {
            watchLogin();
        }

        function watchLogin() {
            $scope.$watch('oauth2', function (newValue, oldValue) {
                if(!!newValue.login && !!newValue.token) {
                    $state.go('scorm');
                }
            });
        }

        function login() {
            vm.loader = true;
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

                    $rootScope.oauth2 = sessionService.getUserData();

                    vm.loader = false;
                    //logger.success('Zostałeś poprawnie zalogowany <b>' + localStorage.getItem('login') + '</b>');
                }, function () {
                    logger.error('Błąd!');
                    vm.loader = false;
                });
        }
    }

})();