(function () {
    "use strict";

    angular.module('app.users')
        .controller('Users', Users)
        .factory('UsersHttpFacade', UsersHttpFacade)

    Users.$inject = ['$state', 'UsersHttpFacade'];

    function Users($state, UsersHttpFacade) {
        /* jshint validthis: true */
        var vm = this;

        vm.viewDetails = viewDetails;
        vm.rowCollection = UsersHttpFacade.getUserData();

        function viewDetails(row) {
            $state.go('userDetails', {
                id: 87
            });
        }
    }

    function UsersHttpFacade() {
        return {
            getUserData: getUserData
        };

        function getUserData() {
            //TODO: api call

            return [
                {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
                {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
                {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
            ];
        }
    }

})();