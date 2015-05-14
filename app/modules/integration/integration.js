(function () {
    "use strict";

    angular.module('app')
        .factory('Integration', Integration);

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