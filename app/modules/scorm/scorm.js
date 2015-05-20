(function () {
    "use strict";

    angular.module('app.scorm')
        .controller('Scorm', Scorm);

    Scorm.$inject = [
        '$rootScope',
        '$state',
        'logger',
        'URLS',
        'Integration',
        'sessionService',
        'HData'
    ];

    function Scorm($rootScope, $state, logger, URLS, Integration, sessionService, HData) {
        /* jshint validthis: true */
        var vm = this,
            basePath = URLS.base;

        activate();

        function activate() {
            var userData = sessionService.getUserData();

            vm.data = HData.getData();

            if (!userData.login || !userData.token) {
                $state.go('login');
            }
        }

        vm.send = send;
        vm.isDisabled = false;

        vm.url = {
            scorm: {
                klasa_1: basePath + "/app/modules/scorm/tpl/scorm_1_3_klasa1/lpc_pl-test_lpc_klasa1/proxy/scorm13/script_00001.emt.html",
                klasa_2: basePath + "/app/modules/scorm/tpl/scorm_1_3_klasa2/lpc_pl-test_lpc_klasa2/proxy/scorm13/script_00002.emt.html",
                klasa_3: basePath + "/app/modules/scorm/tpl/scorm_1_3_klasa3/lpc_pl-test_lpc_klasa3/proxy/scorm13/script_00003.emt.html"
            }
        };

        function send() {
            vm.isDisabled = true;

            Integration.endSession()
                .then(function () {
                    Integration.clearCache();
                    HData.clear();

                    logger.info('Zostałeś wylogowany ponieważ sesja się skończyła');
                    logger.success('Dane zostały wysłane pomyślnie!');

                    vm.isDisabled = false;
                    $rootScope.logout();

                    $state.go('login');
                    logger.success('Dane zostały wysłane pomyślnie!');
                }, function () {
                    logger.error('Dane nie zostały wysłane');
                    vm.isDisabled = false;
                });
        }
    }

})();