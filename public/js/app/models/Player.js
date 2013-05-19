define(["app/collections/CardSet", "backbone"], function(CardSet) {
    "use strict";
    
    var Player = Backbone.Model.extend({
        defaults: {
            'name': "Player Default",
            'cardsOnHand': null
        },
        
        initialize: function() {
            this.set("cardsOnHand", new CardSet(this.get("cardsOnHand")));
            //this.cardsOnHand.bind("change", this.save);
        },
        
        addCard: function(card) {
            this.get("cardsOnHand").add(card);
        }
    });

    return Player;
});