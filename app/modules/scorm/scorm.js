(function () {
    "use strict";

    angular.module('app.scorm')
        .controller('Scorm', Scorm);


    Scorm.$inject = ['$state', 'logger', 'URLS', 'Integration', 'sessionService'];

    function Scorm($state, logger, URLS, Integration, sessionService) {
        /* jshint validthis: true */
        var vm = this,
            basePath = URLS.base;

        activate();


        function activate() {
            var userData = sessionService.getUserData();

            if(!userData.login || !userData.token) {
                $state.go('login');
            }
        }

        vm.send = send;
        vm.loader = false;

        vm.url = {
            scorm: {
                klasa_1: basePath + "/app/modules/scorm/tpl/scorm_1_3_klasa1/lpc_pl-test_lpc_klasa1/proxy/scorm13/script_00001.emt.html",
                klasa_2: basePath + "/app/modules/scorm/tpl/scorm_1_3_klasa2/lpc_pl-test_lpc_klasa2/proxy/scorm13/script_00002.emt.html",
                klasa_3: basePath + "/app/modules/scorm/tpl/scorm_1_3_klasa3/lpc_pl-test_lpc_klasa3/proxy/scorm13/script_00003.emt.html"
            }
        };

        function send() {

            // TODO:
            // User should finished only one lesson and quit (log out) ?
            // Or start another lesson ...

            Integration.endSession()
                .then(function () {
                    Integration.clearCache();
                    logger.success('Dane zostały wysłane pomyślnie!');
                    // TODO: LOGOUT HERE ???????
                    // When session is closed ?

                }, function () {
                    logger.error('Dane nie zostały wysłane');
                });
        }
    }

})();