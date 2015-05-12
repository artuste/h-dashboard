(function () {
    'use strict';

    angular.module('app')
        .run(['$rootScope', '$injector', function ($rootScope, $injector) {
            $injector.get("$http").defaults.transformRequest = function (data, headersGetter) {
                var sessionService = new sessionService();

                if (sessionService.isLogged()) {
                    headersGetter()['Authorization'] = "Bearer " + sessionService.getAccessToken();
                }
                if (data) {
                    return angular.toJson(data);
                }

                ////////////
                function sessionService() {
                    return {
                        isLogged: isLogged
                    };

                    function isLogged() {
                        return 100;
                    }
                }
            };
        }]);


})();