define(["app/models/Card", "backbone"], function(Card) {
    "use strict";
    
    var CardSet = Backbone.Collection.extend({
        model: Card,
        initialize: function() {
        }
    });

    return CardSet;
});