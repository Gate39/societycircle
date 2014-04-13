/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var HomeView = Backbone.View.extend({
        template: JST['app/scripts/templates/Home.hbs'],
        render: function(){
            this.$el.html(this.template());
            $('html').removeClass("bg-dark");
            return this;
        }
        
    });

    return HomeView;
});
