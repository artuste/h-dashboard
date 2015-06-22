(function () {
    "use strict";

    angular.module('app.users')
        .controller('UsersGenerator', UsersGenerator)
        .factory('Users', Users);

    Users.$inject = ['$http', 'URLS'];

    function UsersGenerator(Users) {
        /* jshint validthis: true */
        var vm = this;
        
        vm.prefix = 'Dziecko';
        vm.startNumber = 1;
        vm.count = 1;
        vm.usersCollections = [];

        vm.generate = generate;

        activate();

        function activate() {
            currentUsers();
        }

        function generate() {
            var prefix = vm.prefix,
                startNumber = vm.startNumber,
                length = vm.count;
                
            vm.usersCollections = iterateUsers(prefix, startNumber, length);
        }
        
        function iterateUsers(prefix, startNumber, length) {
            var users = [],
                len = length + startNumber - 1;

            for(var i = startNumber; i<=len; i++) {
                users.push({
                    login: prefix + i,
                    userId: Users.generate()
                });
            }
            
            return users;
        }

        function currentUsers() {
            Users.getCurrentUsers()
                .then(function (response) {
                    vm.currentUsers = response.data;
                });
        }
    }

    function Users($http, URLS) {
        return {
            generate: generate,
            getCurrentUsers: getCurrentUsers
        };

        function generate() {
            var d = new Date().getTime();
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = (d + Math.random()*16)%16 | 0;
                d = Math.floor(d/16);
                return (c=='x' ? r : (r&0x3|0x8)).toString(16);
            });
            return uuid;
        }

        function getCurrentUsers() {
            return $http({
                url: URLS.base + '/app/modules/results/ids.json',
                method: 'GET',
                withCredentials: true
            });
        }
    }

})();