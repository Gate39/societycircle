/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        handlebars: {
            exports: 'Handlebars'
        },
        parse: {
            deps: ['jquery', 'underscore'],
            exports: 'Parse'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap',
        handlebars: '../bower_components/handlebars/handlebars',
        parse: 'http://www.parsecdn.com/js/parse-1.2.16.min'
    }
});

require(['parse'], function(Parse) {
    Parse.initialize("JAqTFwR1fifo4h2bHfVNheJIQUi8Fwz93XrzDInv", "xoPtDEMu96UYvKb81PQxeAaGTjOzT82XHgss27e4");
});

require([
    'backbone' , 'routes/Main'
], function (Backbone,Router) {
    
    new Router();
    
    Backbone.history.start();
    
});
