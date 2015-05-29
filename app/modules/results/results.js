(function () {
    "use strict";

    angular.module('app.results')
        .controller('Results', Results)
        .controller('ResultsDetails', ResultsDetails)
        .factory('ResultsData', ResultsData);

    Results.$inject = ['ResultsData'];
    ResultsDetails.$inject = ['$state', 'ResultsData'];
    ResultsData.$inject = ['$q'];

    function Results(ResultsData) {
        /* jshint validthis: true */
        var vm = this;

        vm.users = null;
        vm.loader = true;

        activate();

        function activate() {
            return ResultsData.getUsersList()
                .then(function (res) {
                    vm.users = res.users;
                    vm.loader = false;
                });
        }
    }

    function ResultsDetails($state, ResultsData) {
        /* jshint validthis: true */
        var vm = this;

        vm.user = {};
        vm.getUser = getUser;

        var userId = $state.params.id;
        vm.loader = true;

        activate();

        function activate() {
            getUser(userId);
        }

        function getUser(userId) {
            return ResultsData.getUser(userId)
                .then(function (res) {
                    vm.loader = false;

                    vm.user = res;
                    csv(res);
                });
        }

        function csv(res) {
            var headerArray = [
                    'Login',
                    'Gender',
                    'Age',
                    'Comment',
                    'SessionStart',
                    'SessionEnd',
                    'motivation',
                    'arousal',
                    'concentration',
                    'focusingAttention',
                    'precissionOfMovements',
                    'stability',
                    'rangeOfMovement',
                    'movementSpeed'
                ],
                dataArray = [];

            dataArray.push(
                {
                    login: res.Login,
                    gender: res.Gender,
                    age: res.Age,
                    comments: res.Comment,
                    sessionStart: res.sessions[0].SessionStart,
                    sessionEnd: res.sessions[0].SessionEnd,
                    motivation: res.sessions[0].results.motivation,
                    arousal: res.sessions[0].results.arousal,
                    concentration: res.sessions[0].results.concentration,
                    focusingAttention: res.sessions[0].results.focusingAttention,
                    precissionOfMovements: res.sessions[0].results.precissionOfMovements,
                    stability: res.sessions[0].results.stability,
                    rangeOfMovement: res.sessions[0].results.rangeOfMovement,
                    movementSpeed: res.sessions[0].results.movementSpeed
                }
            );

            vm.getHeader = headerArray;
            vm.getData = dataArray;


            vm.filename = userId + '-details';
        }
    }

    function ResultsData($q) {
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
            var deferred = $q.defer();

            deferred.resolve(harimata.getUsersList());

            return deferred.promise;
        }
    }

})();