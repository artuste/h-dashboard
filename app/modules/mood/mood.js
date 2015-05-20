(function () {
    "use strict";

    angular.module('app.mood')
        .controller('MoodFirst', MoodFirst)
        .controller('MoodLast', MoodLast);

    MoodFirst.$inject = ['$state'];

    function MoodFirst($state) {
        /* jshint validthis: true */
        var vm = this;

        vm.id = parseInt($state.params.id);
        vm.next = next;

        function next(id) {
            $state.go('klasa_' + id);
        }
    }

    function MoodLast() {
        /* jshint validthis: true */
        var vm = this;
    }

})();