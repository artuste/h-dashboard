(function () {
    "use strict";

    angular.module('app.login')
        .controller('Login', Login)
        .factory('Integration', Integration);

    Login.$inject = ['$rootScope', '$interval', 'Integration'];

    function Login($rootScope, $interval, Integration) {
        /* jshint validthis: true */
        var vm = this;


        vm.login = login;

        activate();

        function activate() {
            //Integration.startSession();
            //
            //Integration.getAssessment()
            //    .then(function(response) {
            //        console.log('GET ASSESS', response);
            //    });
            //
            //Integration.endSession()
            //    .then(function(response) {
            //        console.log('success', response);
            //    }, function (err) {
            //        console.log('err', err);
            //    });
            //
            //Integration.clearCache();
        }

        function login() {
            var login = {
                login: 'WebClient',
                password: '70fdb7b56227077c8df02c7a576f8937',
                clientId: 'WebClient',
                clientSecret: 'i%^+g5Xm7F.^^-F'
            };

            Integration.init(login); // promise ???

            $interval(function () {
                if(localStorage.getItem('login') && localStorage.getItem('access_token')) {
                vm.oauth2 = {
                        login: localStorage.getItem('login'),
                        token: localStorage.getItem('access_token')
                    }
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