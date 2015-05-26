(function () {
    "use strict";

    angular.module('app.results')
        .controller('Results', Results);

    function Results() {
        /* jshint validthis: true */
        var vm = this;

        //Line Chart
        vm.labels = ["January", "February", "March", "April", "May", "June", "July"];
        vm.series = ['Series A', 'Series B'];
        vm.data = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];
        vm.onClick = function (points, evt) {
            console.log(points, evt);
        };

        //Doughnut Chart
        vm.labels2 = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
        vm.data2 = [300, 500, 100];
    }

})();