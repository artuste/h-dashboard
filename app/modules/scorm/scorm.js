(function () {
    "use strict";

    angular.module('app.scorm')
        .controller('Scorm', Scorm)
        .controller('ScormLessons', ScormLessons);


    Scorm.$inject = ['logger', 'URLS', 'Integration', 'sessionService'];

    function Scorm(logger, URLS, Integration, sessionService) {
        /* jshint validthis: true */
        var vm = this,
            basePath = URLS.base;

        activate();


        function activate() {
            //sessionService.watchAuth();
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
            vm.loader = true;
            Integration.endSession()
                .then(function () {
                    vm.loader = false;
                    Integration.clearCache();

                    logger.success('Dane zostały wysłane pomyślnie!');
                }, function () {
                    logger.error('Dane nie zostały wysłane');
                });
        }
    }

    function ScormLessons() {
        /* jshint validthis: true */
        var vm = this;
    }

})();