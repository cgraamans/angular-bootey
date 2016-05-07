require.config({
    baseUrl: "/app",
    paths: {
        'angular': '/node_modules/angular/angular',
        'ngRoute':'/node_modules/angular-route/angular-route',
        'socket': '/node_modules/socket.io-client/socket.io',
        'btford-socket':'/node_modules/angular-socket-io/socket',
        'angularAMD': '/node_modules/angular-amd/angularAMD.min',
        'ngload': '/node_modules/angular-amd/ngload.min',
        'jquery': '/lib/jquery-1.12.3.min',
        'opt':'/app/options'
    },
    shim: {
        'angularAMD': ['angular'],
        'ngload': ['angularAMD'],
        'ngRoute':['angular'],
        'btford-socket':['socket','angular'],
        'socket': { exports: 'io' }
    },
    deps: ['app']
});