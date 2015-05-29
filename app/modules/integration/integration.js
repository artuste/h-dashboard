(function () {
    "use strict";

    angular.module('app')
        .factory('Integration', Integration)
        .factory('HData', HData);

    function Integration() {
        return {
            init: init,
            selectUser: selectUser,
            startSession: startSession,
            endSession: endSession,
            clearCache: clearCache,
            getAssessment: getAssessment,

            sendFeedback: sendFeedback
        };

        function init(params) {
            return harimata.init(params.login, params.password, params.clientId, params.clientSecret, {});
        }

        function startSession() {
            console.log('startSession');

            return harimata.startSession({
                device: "Browser 5",
                appName: "YDPApp 5",
                comment: "put comment here 5"
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

        function selectUser() {
            return harimata.selectUser({
                userId: "66662f82-f8a8-11e4-a322-1697f925ec7b",
                login: "ydpTest6",
                age: 6, // OUT !!!!
                gender: 'm',  // OUT !!!!
                disorders: "foo6, bar6",  // OUT !!!!
                device: 6 // OUT !!!!
            });
        }

        function sendFeedback(data) {
            return harimata.sendFeedback({
                moodFirst: data.moodFirst,
                classId: data.classId,
                moodLast: data.moodLast
            });
        }
    }


    function HData() {
        var _model = {};

        return {
            getData: getData,
            clear: clear
        };

        function getData() {
            return _model;
        }

        function clear() {
            _model = {};
        }
    }

})();