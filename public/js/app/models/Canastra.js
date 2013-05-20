define(["app/models/Deck", "app/models/Trash", "backbone"], function(Deck, Trash) {
    "use strict";
    
    var Canastra = Backbone.Model.extend({
        
        currentPlayer: null,

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
            
            this.start();
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
        },
        
        start: function() {
            this.nextPlayer();
        },
        
        nextPlayer: function() {
            if(!this.currentPlayer) {
                this.currentPlayer = this.players.team1[0];
                this.trigger("change");
                return this.currentPlayer;
            }
            
            var i;
            for(i = 0; i < this.players.team1.length; i++) {
                if(this.players.team1[i].get("name") === this.currentPlayer.get("name")) {
                    this.currentPlayer = this.players.team2[i];
                    this.trigger("change");
                    return this.currentPlayer;
                }
                
                if(this.players.team2[i].get("name") === this.currentPlayer.get("name")) {
                    if(i === 1 || this.players.team1.length === 1) {
                        this.currentPlayer = this.players.team1[0];
                        this.trigger("change");
                        return this.currentPlayer;
                    } else {
                        this.currentPlayer = this.players.team1[1];
                        this.trigger("change");
                        return this.currentPlayer;
                    }
                }
            }
        }
    }, {
        CARDS_BY_HAND: 13
    });

    return Canastra;
});