(function () {
    "use strict";

    angular.module('app')
        .constant('KEYS', {
            moodFirst: {
                '1': 'radosny',
                '2': 'zainteresowany',
                '3': 'spokojny',
                '4': 'zmartwiony',
                '5': 'smutny',
                '6': 'znudzony',
                '7': 'zdenerwowany',
                '8': 'senny'
            },
            moodLast: {
                '1': 'nie podobalo sie',
                '2': 'takie sobie',
                '3': 'podobalo mi sie'
            },
            gender: {
                'f': 'kobieta',
                'm': 'mezczyzna'
            }
        })
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
                appName: "YDPApp",
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
                login: "ydpTest6"
            });
        }

        function sendFeedback(data) {
            return harimata.sendFeedback(data);
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

})
();