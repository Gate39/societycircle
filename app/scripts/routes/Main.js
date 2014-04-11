/*global define*/

define([
    'jquery',
    'backbone'
], function ($, Backbone) {
    'use strict';

    var MainRouter = Backbone.Router.extend({
        routes: {
            "": "home",
            "contact": "contact",
        },
        
        home: function () {
            require(["views/Home"], function (HomeView) {
                
                var view = new HomeView({el: $('.jumbotron')});
                view.render();
            });
        },
        
        contact: function () {
            require(["views/Login"], function (LoginView) {
                var view = new LoginView({el: $('.jumbotron')});
                view.render();
            });
        },

    });

    return MainRouter;
});
