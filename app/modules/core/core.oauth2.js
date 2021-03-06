//Not in use

(function () {
    'use strict';

    angular.module('app')
        .factory('sessionService', sessionService)
        .run(['$rootScope', '$state', '$injector', 'logger', 'sessionService', function ($rootScope, $state, $injector, logger, sessionService) {

            $rootScope.theme = 'theme1';
            $rootScope.oauth2 = sessionService.getUserData();
            $rootScope.logout = logout;

            function logout() {
                localStorage.removeItem('login');
                localStorage.removeItem('access_token');
                localStorage.removeItem('user');

                $rootScope.oauth2 = {};

                logger.info('Zosta&#322;e&#347; wylogowany!');
            }

            sessionService.watchAuth();


            $rootScope.changeTheme = changeTheme;

            function changeTheme(number) {
                $rootScope.theme = 'theme' + number;
            }

        }]);


    sessionService.$inject = ['$rootScope', '$state'];

    ////////////
    function sessionService($rootScope, $state) {
        return {
            getUserData: getUserData,
            watchAuth: watchAuth
        };

        function getUserData() {
            return {
                login: localStorage.getItem('login'),
                token: localStorage.getItem('access_token'),
                user: !!localStorage.getItem('current_user') ? JSON.parse(localStorage.getItem('current_user')).login : ''
            }
        }

        function watchAuth() {
            $rootScope.$watch('oauth2', function (newValue, oldValue) {
                if (!!newValue.login && !!newValue.token) {
                    $state.go('scorm');
                } else {
                    $state.go('login');
                }
            });
        }
    }

})();