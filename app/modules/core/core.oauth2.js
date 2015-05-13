//Not in use

//(function () {
//    'use strict';
//
//    angular.module('app')
//        .factory('sessionService', sessionService)
//        .run(['$rootScope', '$injector', 'sessionService', function ($rootScope, $injector, sessionService) {
//            $injector.get("$http").defaults.transformRequest = function (data, headersGetter) {
//                if (sessionService.getAccessToken()) {
//                    headersGetter()['Authorization'] = "Bearer " + sessionService.getAccessToken();
//                }
//            };
//        }]);
//
//    ////////////
//    function sessionService() {
//        var _token = localStorage.getItem('access_token');
//
//        return {
//            getAccessToken: getAccessToken
//        };
//
//        function getAccessToken() {
//            return _token;
//        }
//    }
//
//})();