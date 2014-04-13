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
        render: function () {
            this.$el.replaceWith(this.template());
            return this;
        }
    });

    return HomeView;
});
