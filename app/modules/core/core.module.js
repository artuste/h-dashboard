(function () {
    'use strict';

    angular.module('app.core', [
        /*
         * Angular modules
         */
        'ngRoute',
        'ngAnimate',
        'toastr',
        'ngResource',
        'pascalprecht.translate',
        'ui.router',

        /*
         * Our reusable cross app code modules
         */
        'tools', 'ui.components',

        /*
         * 3rd Party modules
         */
        'ui.utils',
        'ui.bootstrap',
        'angularMoment',
        'ui.calendar',
        'schemaForm',
        'angular-lodash',

        /*
         * Feature areas
         */
        'app.users'
    ]);
})();