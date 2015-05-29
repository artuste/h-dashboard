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

        vm.login = login;

        activate();

        function activate() {

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
                    Integration.selectUser(); // TODO: podać user id
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