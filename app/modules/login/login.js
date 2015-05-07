(function () {
    "use strict";

    angular.module('app.login')
        .controller('Login', Login)
        .factory('Integration', Integration);

    function Login(Integration) {
        /* jshint validthis: true */
        var vm = this;

        activate();

        function activate() {
            Integration.init({
                login: 'WebClient',
                password: '70fdb7b56227077c8df02c7a576f8937',
                clientId: 'WebClient',
                clientSecret: 'i%^+g5Xm7F.^^-F'
            });

            Integration.startSession();

            Integration.endSession()
                .then(function(response) {
                    console.log('success', response);
                }, function (err) {
                    console.log('err', err);
                });

            Integration.clearCache();
        }
    }

    function Integration() {
        return {
            init: init,
            startSession: startSession,
            endSession: endSession,
            clearCache: clearCache
        };

        function init(params) {
            harimata.init(params.login, params.password, params.clientId, params.clientSecret, {});
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
    }

})();