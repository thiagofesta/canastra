define(["app/models/Card", "app/collections/CardSet", "backbone"], function(Card, CardSet) {
    "use strict";
    
    var Deck = Backbone.Model.extend({
        defaults: {
            cards: null
        },
        
        initialize: function() {
            this.set("cards", new CardSet(this.get("cards")));
            
            this.createDeck(1);
            this.createDeck(2);
            
            this.shuffle();
        },
        
        createDeck: function(id) {
            var i,
                j;
                
            for(i = 0; i < Card.SUITS.length; i++) {
                for(j = 1; j < _.toArray(Card.VALUES).length; j++) {
                    this.get("cards").add(new Card({
                        deckId: id,
                        suit: Card.SUITS[i],
                        value: Card.VALUES[j]
                    }));
                }
            }
            
            // Add jokers
            for(i = 0; i < Card.JOKERS.length; i++) {
                this.get("cards").add(new Card({
                    deckId: id,
                    suit: Card.JOKERS[i],
                    value: Card.VALUES[0]
                }));
            }
        },
        
        shuffle: function() {
            var shuffled = this.get("cards").shuffle();
            
            this.get("cards").reset();
            
            _.each(shuffled, function(card) {
                this.get("cards").add(card);
            }, this);
        },
        
        getCard: function() {
            return this.get("cards").shift();
        }
    });

    return Deck;
});