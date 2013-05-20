define(["app/models/Deck", "app/views/PlayerView", "app/views/DeckView", "backbone"], function(Deck, PlayerView, DeckView) {
    "use strict";
    
    var CanastraView = Backbone.View.extend({
        el: "#canastra",
        
        events: {
            "click .icon":          "open",
            "click .button.edit":   "openEditDialog",
            "click .button.delete": "destroy"
        },
        
        initialize: function(options) {
            this.listenTo(this.model, "change", this.render);
        },
        
        render: function() {
            this.renderPlayers();
            
            this.renderDeck();
        },
        
        renderPlayers: function() {
            var player;
            
            _.each(this.model.players.team1, function(item, i) {
                player = new PlayerView({
                    el: "#team1 > .player" + (i+1),
                    model: item
                });
                player.render();
            }, this);
            
            _.each(this.model.players.team2, function(item, i) {
                player = new PlayerView({
                    el: "#team2 > .player" + (i+1),
                    model: item
                });
                player.render();
            }, this);
        },
        
        renderDeck: function() {
            var deckView = new DeckView({
                model: this.model.deck
            });
            deckView.render();
        }
        
    });

    return CanastraView;
});