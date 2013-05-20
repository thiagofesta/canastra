define(["app/models/Card", "app/collections/CardSet", "backbone"], function(Card, CardSet) {
    "use strict";
    
    var Trash = Backbone.Model.extend({
        defaults: {
            cards: null
        },
        
        initialize: function() {
            this.set("cards", new CardSet(this.get("cards")));
        }
    });

    return Trash;
});