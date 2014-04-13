/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var LoginView = Backbone.View.extend({
        template: JST['app/scripts/templates/Login.hbs'],
        render: function(){
            this.$el.html(this.template());
            $('html').addClass("bg-dark");
            return this;
        }
    });

    return LoginView;
});
