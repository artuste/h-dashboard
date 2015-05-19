(function () {
    "use strict";

    angular.module('app.mood')
        .controller('MoodFirst', MoodFirst)
        .controller('MoodLast', MoodLast);

    function MoodFirst() {
        /* jshint validthis: true */
        var vm = this;
    }

    function MoodLast() {
        /* jshint validthis: true */
        var vm = this;
    }

})();