(function (module) {

    var Envs = {
        prod: 'http://appv2.voxxr.in',
        test: 'http://appv2-test.voxxr.in',
        local: ''
    };
    Envs._default = Envs.prod;

    /**
      Edit this part ONLY
    **/
    var configuration = {
        'dev': Envs.local,
        '0.2': Envs.prod,
        '0.2.1': Envs.prod
    };
    /**************/

    var ServerConfig = {
        backendUrl: function () {
            var url = configuration[appVersion];
            console.log('remote backend configuration : ', url || Envs._default);
            if (url === undefined || url === null) return Envs._default;
            return url;
        }
    };

    module
        .constant('ServerConfig', ServerConfig)
        .constant('ServerUrl', ServerConfig.backendUrl())
        .constant('ServerEnvs', Envs);

})(angular.module('config', []));
