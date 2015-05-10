(function () {
    "use strict";

    angular.module('app.login')
        .controller('Login', Login)
        .factory('Integration', Integration);

    Login.$inject = ['$rootScope', '$interval', 'logger', 'Integration'];

    function Login($rootScope, $interval, logger, Integration) {
        /* jshint validthis: true */
        var vm = this;


        vm.login = login;

        activate();

        function activate() {

        }

        function login() {
            var login = {
                login: 'WebClient',
                password: '70fdb7b56227077c8df02c7a576f8937',
                clientId: 'WebClient',
                clientSecret: 'i%^+g5Xm7F.^^-F'
            };

            Integration.init(login); // promise ???

            var interval = $interval(function () {
                if (localStorage.getItem('login') && localStorage.getItem('access_token')) {
                    $rootScope.oauth2 = {
                        login: localStorage.getItem('login'),
                        token: localStorage.getItem('access_token')
                    };
                    logger.info('Zostałeś poprawnie zalogowany!');
                    $interval.cancel(interval);
                }
            }, 500);
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
                appName: "YDP Game 1",
                comment: "example of comment",
                disorders: "list, of, disorders"
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