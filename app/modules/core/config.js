(function () {
    'use strict';

    angular.module('app')
        .constant('URLS', {
            base: window.location.origin
        })
        .config(['$urlRouterProvider', 'toastrConfig', config]);

    function config($urlRouterProvider, toastrConfig) {
        $urlRouterProvider.otherwise("/users");

        angular.extend(toastrConfig, {
            allowHtml: true,
            closeButton: false,
            closeHtml: '<button>&times;</button>',
            containerId: 'toast-container',
            extendedTimeOut: 1000,
            iconClasses: {
                error: 'toast-error',
                info: 'toast-info',
                success: 'toast-success',
                warning: 'toast-warning'
            },
            maxOpened: 0,
            messageClass: 'toast-message',
            newestOnTop: true,
            onHidden: null,
            onShown: null,
            positionClass: 'toast-bottom-right',
            preventDuplicates: false,
            tapToDismiss: true,
            target: 'body',
            timeOut: 5000,
            titleClass: 'toast-title',
            toastClass: 'toast'
        });
    }

})();