//Not in use

(function () {
    'use strict';

    angular.module('app')
        .factory('sessionService', sessionService)
        .run(['$rootScope', '$injector', 'sessionService', function ($rootScope, $injector, sessionService) {

            console.log('sessionData', sessionService.getUserData());

            $rootScope.oauth2 = sessionService.getUserData();
        }]);

    ////////////
    function sessionService() {
        return {
            getUserData: getUserData
        };

        function getUserData() {
            return {
                login: localStorage.getItem('login'),
                token: localStorage.getItem('access_token')
            }
        }
    }

})();