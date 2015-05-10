(function () {
    "use strict";

    angular.module('app.users')
        .controller('Users', Users)
        .factory('UsersHttpFacade', UsersHttpFacade)

    Users.$inject = ['$state', 'UsersHttpFacade'];
    UsersHttpFacade.$inject = ['logger'];

    function Users($state, UsersHttpFacade) {
        /* jshint validthis: true */
        var vm = this;

        vm.viewDetails = viewDetails;
        vm.rowCollection = UsersHttpFacade.getUserData();
        vm.save = save;

        function viewDetails(row) {
            $state.go('userDetails', {
                id: row.id
            });
        }

        function save(form) {
            UsersHttpFacade.save(form);
        }
    }

    function UsersHttpFacade(logger) {
        return {
            getUserData: getUserData,
            save: save
        };

        function getUserData() {
            //TODO: api call

            return [
                {id: 1, firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
                {id: 2, firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
                {id: 3, firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
            ];
        }

        function save(form) {
            // TODO
            logger.success('Zapisano!');

            console.log('form save', form);
        }
    }

})();