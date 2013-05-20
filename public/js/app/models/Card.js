define(["backbone"], function() {
    "use strict";
    
    var Card = Backbone.Model.extend({
        
        defaults: {
            id: null,
            deckId: null,
            suit: null,
            value: null
        },
        
        initialize: function() {
            this.set("id", this.getId());
        },
        
        getId: function() {
            return this.get("suit") + "-" + this.get("value").id + "-" + this.get("deckId");
        },
        
        getClassName: function(back) {
            var className = "card ",
                suit;
            
            // Get Back card
            if(back === true) {
                console.log(this.get("deckId"));
                if(this.get("deckId") === 1) {
                    return className + "back-black"
                }
                return className + "back-red";
            }
            
            // Get Face card
            suit = this.get("suit");
            
            className = className + suit;
            
            if(suit === Card.JOKERS[0] || suit === Card.JOKERS[1]) {
                return className;
            }
            
            return className + this.get("value").id;
        }
        
    }, {
        JOKERS: ["joker-red", "joker-black"],
        SUITS: ["heart", "diamond", "club", "spade"],
        VALUES: {
            0: {
                id: 0,
                order: true,
                value: 50
            },
            1: {
                id: 1,
                order: 14,
                value: 20
            },
            2: {
                id: 2,
                order: true,
                value: 50
            },
            3: {
                id: 3,
                order: false,
                value: 0
            },
            4: {
                id: 4,
                order: 4,
                value: 10
            },
            5: {
                id: 5,
                order: 5,
                value: 10
            },
            6: {
                id: 6,
                order: 6,
                value: 10
            },
            7: {
                id: 7,
                order: 7,
                value: 10
            },
            8: {
                id: 8,
                order: 8,
                value: 10
            },
            9: {
                id: 9,
                order: 9,
                value: 10
            },
            10: {
                id: 10,
                order: 10,
                value: 10
            },
            11: {
                id: 11,
                order: 11,
                value: 10
            },
            12: {
                id: 12,
                order: 12,
                value: 10
            },
            13: {
                id: 13,
                order: 13,
                value: 10
            }
        }
        
    });

    return Card;
});