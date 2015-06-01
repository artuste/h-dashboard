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

        vm.toggleFullScreen = toggleFullScreen;

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
        vm.isFullScreen = true;


        // working scorm
        //'http://localhost:1338/app/modules/scorm/tpl/lower_primary_curriculum_demo_tech/scorm-emt.html?sco=content%2Fscript_00001.emt.xml&title=Selection+of+Multimedia+and+Activity+Screens&api=13'

        vm.url = {
            scorm: {
                klasa_1: basePath + "/app/modules/scorm/tpl/klasa1/proxy/scorm13/script_00001.emt.html",
                klasa_2: basePath + "/app/modules/scorm/tpl/klasa2/proxy/scorm13/script_00002.emt.html",
                klasa_3: basePath + "/app/modules/scorm/tpl/klasa3/proxy/scorm13/script_00003.emt.html"
            }
        };

        function toggleFullScreen() {
            if(vm.isFullScreen === false) {
                vm.isFullScreen = true;
            } else {
                vm.isFullScreen = false;
            }
        }

        function send() {
            vm.isDisabled = true;

            Integration.endSession()
                .then(function () {
                    Integration.sendFeedback(vm.data);
                    Integration.clearCache();
                    HData.clear();

                    logger.success('Dane zostały wysłane pomyślnie!');

                    vm.isDisabled = false;
                    $rootScope.logout();

                    $state.go('login');
                }, function () {
                    logger.error('Dane nie zostały wysłane');
                    vm.isDisabled = false;
                });
        }
    }

})();