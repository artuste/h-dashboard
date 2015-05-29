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
                    vm.user = res;
                    vm.loader = false;
                });
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