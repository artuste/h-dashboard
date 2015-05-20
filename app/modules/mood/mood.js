(function () {
    "use strict";

    angular.module('app.mood')
        .controller('MoodFirst', MoodFirst)
        .controller('MoodLast', MoodLast);

    MoodFirst.$inject = ['$state', 'HData'];
    MoodLast.$inject = ['HData'];

    function MoodFirst($state, HData) {
        /* jshint validthis: true */
        var vm = this;

        vm.data = HData.getData();
        vm.data.moodFirst = {};
        vm.data.classId = parseInt($state.params.id);

        vm.next = next;

        function next(id) {
            $state.go('klasa_' + id);
        }
    }

    function MoodLast(HData) {
        /* jshint validthis: true */
        var vm = this;

        vm.data = HData.getData();
        vm.data.moodLast = {};
    }

})();