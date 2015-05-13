(function () {
    "use strict";

    angular.module('app.login')
        .controller('Login', Login)
        .factory('Integration', Integration);

    Login.$inject = ['$rootScope', 'logger', 'Integration'];

    function Login($rootScope, logger, Integration) {
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
                    Integration.startSession();

                    $rootScope.oauth2 = {
                        login: localStorage.getItem('login'),
                        token: localStorage.getItem('access_token')
                    };

                    logger.success('Zostałeś poprawnie zalogowany!');
                }, function () {
                    logger.error('Błąd!');
                });
        }
    }

    function Integration() {
        return {
            init: init,
            startSession: startSession,
            endSession: endSession,
            clearCache: clearCache,
            getAssessment: getAssessment
        };

        function init(params) {
            return harimata.init(params.login, params.password, params.clientId, params.clientSecret, {});
        }

        function startSession() {
            harimata.startSession({
                age: 4,
                gender: "m", // 'm' for male, 'f' for female
                device: "Browser",
                appName: "YDPApp",
                comment: "put comment here",
                disorders: "list, of, disorders",
                userId: "ad282f82-f8a8-11e4-a322-1697f925ec7b",
                login: "ydpTestLogin1"
            });
        }

        function endSession() {
            return harimata.endSession();
        }

        function clearCache() {
            harimata.clearCache();
        }

        function getAssessment() {
            return harimata.getAssessment();
        }
    }

})();