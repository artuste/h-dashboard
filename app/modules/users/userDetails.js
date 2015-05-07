(function () {
    "use strict";

    angular.module('app.users')
        .controller('UsersDetails', UsersDetails);

    function UsersDetails() {
        /* jshint validthis: true */
        var vm = this;

        vm.test = Math.random(20);
    }

})();