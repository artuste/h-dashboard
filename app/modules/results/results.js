(function () {
    "use strict";

    angular.module('app.results')
        .controller('Results', Results)
        .controller('ResultsDetails', ResultsDetails)
        .factory('ResultsData', ResultsData);

    Results.$inject = ['ResultsData'];
    ResultsDetails.$inject = ['$state', 'KEYS', 'ResultsData'];
    ResultsData.$inject = ['$q', '$http', 'URLS'];

    function Results(ResultsData) {
        /* jshint validthis: true */
        var vm = this;

        vm.users = null;
        vm.loader = true;

        activate();

        function activate() {
            // TODO! CSV Button generate
            //getAllCsvData();

            return ResultsData.getUsersList()
                .then(function (res) {
                    //JSON
                    vm.users = res.data;

                    //vm.users = res.users;
                    vm.loader = false;
                });
        }

        //function getAllCsvData() {
        //    //var n = "f09aacca-0f8b-46f2-8f33-45ad2d770593";
        //    //
        //    //ResultsData.getUser(n)
        //    //    .then(function (item) {
        //    //        debugger;
        //    //    });
        //
        //    return ResultsData.getUsersList()
        //        .then(function (users) {
        //            var usersCollection = [],
        //                usersArr = users.data;
        //
        //            _.each(usersArr, function (user) {
        //                if (user.userId.length > 0) {
        //                    return ResultsData.getUser(user.userId)
        //                        .then(function (detail) {
        //                            if (typeof(detail.error) !== 'object') {
        //                                console.log('detail', detail);
        //                                usersCollection.push(detail);
        //                            }
        //                        });
        //                }
        //            });
        //
        //            return usersCollection;
        //        });
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
                    vm.loader = false;

                    if(!!res.Login) {
                        vm.user = res;
                        csv(res);
                    } else {
                       vm.error = true;
                    }

                });
        }

        function csv(res) {
            var headerArray = [
                    'Login',
                    'Plec',
                    'Wiek',
                    'Komentarz',
                    'SessionStart',
                    'SessionEnd',
                    'motywacja',
                    'pobudzenie',
                    'koncentracja',
                    'skupienie uwagi',
                    'precyzja ruchow',
                    'stabilnosc ruchu',
                    'zakres ruchu',
                    'szybkosc ruchu',
                    'Ocena ogolnego nastroju',
                    'Ocena koncowa nastroju',
                    'Klasa',
                    'Plec'
                ],
                dataArray = [];

            dataArray.push(
                {
                    login: res.Login,
                    gender: KEYS.gender[res.Gender],
                    age: res.Age,
                    comments: res.Comment,
                    sessionStart: moment(new Date(res.sessions[0].SessionStart * 1000)).format('DD-MM-YYYY'),
                    sessionEnd: moment(new Date(res.sessions[0].SessionEnd * 1000)).format('DD-MM-YYYY'),
                    motivation: res.sessions[0].results.motivation,
                    arousal: res.sessions[0].results.arousal,
                    concentration: res.sessions[0].results.concentration,
                    focusingAttention: res.sessions[0].results.focusingAttention,
                    precissionOfMovements: res.sessions[0].results.precissionOfMovements,
                    stability: res.sessions[0].results.stability,
                    rangeOfMovement: res.sessions[0].results.rangeOfMovement,
                    movementSpeed: res.sessions[0].results.movementSpeed,
                    feedbackMoodFirst: KEYS.moodFirst[res.feedback.moodFirst],
                    feedbackMoodLast: KEYS.moodLast[res.feedback.moodLast],
                    feedbackClassId: res.feedback.classId,
                    feedbackGender: KEYS.gender[res.feedback.gender]
                }
            );

            vm.getHeader = headerArray;
            vm.getData = dataArray;


            vm.filename = res.Login + '-details';
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