(function () {
    'use strict';

    angular.module('app.core', [
        /*
         * Angular modules
         */
        'ngRoute',
        'ngAnimate',
        'ngSanitize',
        'ngResource',

        /*
         * Our reusable cross app code modules
         */
        'tools',
        'ui.components',

        /*
         * 3rd Party modules
         */
        'toastr',
        'pascalprecht.translate',
        'ui.router',
        'ui.utils',
        'ui.bootstrap',
        'angularMoment',
        'ui.calendar',
        'schemaForm',
        'angular-lodash',
        'LocalStorageModule',
        'ng-token-auth',
        'chart.js',
        'ngCsv',

        /*
         * Feature areas
         */
        'app.login',
        'app.users',
        'app.scorm',
        'app.results',
        'app.mood'
    ]);

})();