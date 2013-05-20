define(["app/models/Deck", "app/models/Trash", "backbone"], function(Deck, Trash) {
    "use strict";
    
    var Canastra = Backbone.Model.extend({

        players: {
            team1: [],
            team2: []
        },
        
        deck: null,
        trash: null,
        
        initialize: function(options) {
            this.players = options.players;
            
            this.deck = new Deck();
            this.trash = new Trash();
            
            this.dealCards();
        },
        
        dealCards: function() {
            var i,
                j;
            
            for(j = 0; j < Canastra.CARDS_BY_HAND; j++) {
                for(i = 0; i < this.players.team1.length; i++) {
                    this.players.team1[i].addCard(this.deck.getCard());
                    this.players.team2[i].addCard(this.deck.getCard());
                }
            }
        }
    }, {
        CARDS_BY_HAND: 13
    });

    return Canastra;
});