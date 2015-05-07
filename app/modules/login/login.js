(function () {
    "use strict";

    angular.module('app.login')
        .controller('Login', Login);

    function Login() {
        /* jshint validthis: true */
        var vm = this;

        vm.loginTest = Math.random(20);
    }

})();