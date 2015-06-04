(function () {
    "use strict";

    angular.module('app.results')
        .controller('Results', Results)
        .controller('ResultsDetails', ResultsDetails)
        .factory('ResultsData', ResultsData);

    Results.$inject = ['KEYS', 'ResultsData'];
    ResultsDetails.$inject = ['$state', 'KEYS', 'ResultsData'];
    ResultsData.$inject = ['$q', '$http', 'URLS'];

    function Results(KEYS, ResultsData) {
        /* jshint validthis: true */
        var vm = this;

        vm.users = null;
        vm.loader = true;
        vm.counter = 0;
        vm.data = null;
        vm.getCsvData = null;

        vm.generateCSV = generateCSV;


        activate();

        function activate() {

            return ResultsData.getUsersList()
                .then(function (res) {
                    vm.users = res.data;
                    vm.loader = false;
                });
        }

        function generateCSV() {
            vm.loader = true;
            return ResultsData.getUsersList()
                .then(function (res) {
                    csv(res);
                });
        }


        function csv(data) {
            vm.csvFilename = 'ydpApp_Users_' + moment(new Date()).format('DD-MM-YYYY_Hm') + '.csv';
            vm.getHeader = [
                'Login',
                'Ocena ogolnego nastroju',
                'Ocena koncowa nastroju',
                'Klasa',
                'Plec',

                'Start sesji',
                'Koniec sesji',

                'motywacja',
                'pobudzenie',
                'koncentracja',
                'skupienie uwagi',
                'precyzja ruchow',
                'stabilnosc ruchu',
                'zakres ruchu',
                'szybkosc ruchu'
            ];

            getCsvData(data);
        }

        function getCsvData(users) {
            var usersCollection = [];
            var usersArr = users.data;

            _.forEach(usersArr, function (user) {
                if (user.userId.length > 0) {
                    return ResultsData.getUser(user.userId)
                        .then(function (detail) {
                            if (typeof(detail.error) !== 'object') {
                                //usersCollection.push(_createUserDetails(detail));
                                _.forEach(detail.sessions, function(session) {
                                    usersCollection.push({
                                        login: detail.Login,
                                        feedbackMoodFirst: KEYS.moodFirst[detail.feedback.moodFirst],
                                        feedbackMoodLast: KEYS.moodLast[detail.feedback.moodLast],
                                        feedbackClassId: detail.feedback.classId,
                                        feedbackGender: KEYS.gender[detail.feedback.gender],
                                        sessionStart: moment(new Date(parseInt(session.SessionStart))).format('DD-MM-YYYY H:m'),
                                        sessionEnd: moment(new Date(parseInt(session.SessionEnd))).format('DD-MM-YYYY H:m'),
                                        motivation: session.results.motivation,
                                        arousal: session.results.arousal,
                                        concentration: session.results.concentration,
                                        focusingAttention: session.results.focusingAttention,
                                        precissionOfMovements: session.results.precissionOfMovements,
                                        stability: session.results.stability,
                                        rangeOfMovement: session.results.rangeOfMovement,
                                        movementSpeed: session.results.movementSpeed
                                    });
                                });

                            }
                            vm.counter++;

                            if (usersArr.length === vm.counter) {
                                vm.getCsvData = usersCollection;
                                vm.loader = false;
                            }
                        });
                }
            });
        }

        //function _createUserDetails(res) {
        //    var userDetails = [];
        //
        //    userDetails = {
        //        login: res.Login,
        //        feedbackMoodFirst: KEYS.moodFirst[res.feedback.moodFirst],
        //        feedbackMoodLast: KEYS.moodLast[res.feedback.moodLast],
        //        feedbackClassId: res.feedback.classId,
        //        feedbackGender: KEYS.gender[res.feedback.gender],
        //        //sessions: []
        //
        //        // only for one indicator
        //        //sessionStart: moment(new Date(res.sessions[0].SessionStart * 1000)).format('DD-MM-YYYY'),
        //        //sessionEnd: moment(new Date(res.sessions[0].SessionEnd * 1000)).format('DD-MM-YYYY'),
        //        motivation: res.sessions[0].results.motivation,
        //        arousal: res.sessions[0].results.arousal,
        //        concentration: res.sessions[0].results.concentration,
        //        focusingAttention: res.sessions[0].results.focusingAttention,
        //        precissionOfMovements: res.sessions[0].results.precissionOfMovements,
        //        stability: res.sessions[0].results.stability,
        //        rangeOfMovement: res.sessions[0].results.rangeOfMovement,
        //        movementSpeed: res.sessions[0].results.movementSpeed
        //    };
        //
        //    //TODO
        //    //_.forEach(res.sessions, function(session) {
        //    //    userDetails = {
        //    //        login: res.Login,
        //    //        feedbackMoodFirst: KEYS.moodFirst[res.feedback.moodFirst],
        //    //        feedbackMoodLast: KEYS.moodLast[res.feedback.moodLast],
        //    //        feedbackClassId: res.feedback.classId,
        //    //        feedbackGender: KEYS.gender[res.feedback.gender],
        //    //        sessionStart: moment(new Date(session.SessionStart * 1000)).format('DD-MM-YYYY'),
        //    //        sessionEnd: moment(new Date(session.SessionEnd * 1000)).format('DD-MM-YYYY'),
        //    //        motivation: session.results.motivation,
        //    //        arousal: session.results.arousal,
        //    //        concentration: session.results.concentration,
        //    //        focusingAttention: session.results.focusingAttention,
        //    //        precissionOfMovements: session.results.precissionOfMovements,
        //    //        stability: session.results.stability,
        //    //        rangeOfMovement: session.results.rangeOfMovement,
        //    //        movementSpeed: session.results.movementSpeed
        //    //    };
        //    //});
        //
        //    return userDetails;
        //}
    }

    function ResultsDetails($state, KEYS, ResultsData) {
        /* jshint validthis: true */
        var vm = this;

        vm.user = {};
        vm.getUser = getUser;

        var userId = $state.params.id;
        vm.loader = true;
        vm.error = false;

        activate();

        function activate() {
            getUser(userId);
            vm.keys = KEYS;
        }

        function getUser(userId) {
            return ResultsData.getUser(userId)
                .then(function (res) {
                    if (!!res.Login) {
                        vm.user = res;
                    } else {
                        vm.error = true;
                    }

                    vm.loader = false;
                });
        }
    }

    function ResultsData($q, $http, URLS) {
        return {
            getUser: getUser,
            getUsersList: getUsersList
        };

        function getUser(userId) {
            var deferred = $q.defer();

            deferred.resolve(harimata.getUser(userId));

            return deferred.promise;
        }

        function getUsersList() {
            //JSON
            return $http.get(URLS.base + '/app/modules/results/ids.json');

            //API
            //var deferred = $q.defer();
            //deferred.resolve(harimata.getUsersList());
            //return deferred.promise;
        }

    }

})();