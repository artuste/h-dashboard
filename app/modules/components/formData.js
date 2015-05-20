(function () {
    'use strict';

    angular
        .module('ui.components')
        .directive('formData', formData);

    function formData() {
        return {
            restrict: 'AE',
            scope: {},
            template: '<pre>{{ vm.data | json }}</pre>',
            controllerAs: 'vm',
            controller: function (HData) {
                /* jshint validthis: true */
                var vm = this;

                vm.data = HData.getData();
            }
        };
    }
})();