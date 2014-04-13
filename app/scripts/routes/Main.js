/*global define*/

define([
    'jquery',
    'backbone'
], function ($, Backbone) {
    'use strict';

    var MainRouter = Backbone.Router.extend({
        routes: {
            "": "login",
            "login": "login",
            "home": "home"
        },
        
        home: function () {
            require(["views/Home"], function (HomeView) {
                
                var view = new HomeView({el: $('body')});
                view.render();
            });
        },
        
        login: function () {
            require(["views/Login"], function (LoginView) {
                var view = new LoginView({el: $('body')});
                view.render();
            });
        },

    });

    return MainRouter;
});
