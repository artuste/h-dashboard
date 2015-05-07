(function () {
    "use strict";

    angular.module('app.login')
        .controller('Login', Login);

    Login.$inject = ['OAuth'];

    function Login(OAuth) {
        /* jshint validthis: true */
        var vm = this;

        // Authenticated
        vm.isAuthenticated = OAuth.isAuthenticated();
    }

})();