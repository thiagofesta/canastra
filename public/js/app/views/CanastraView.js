define(["app/models/Deck", "app/views/PlayerView", "app/views/DeckView", "app/views/TrashView", "backbone"], function(Deck, PlayerView, DeckView, TrashView) {
    "use strict";
    
    var CanastraView = Backbone.View.extend({
        el: "#canastra",
                
        initialize: function(options) {
            this.listenTo(this.model, "change", this.render);
        },
        
        render: function() {
            console.log("x");
            this.renderPlayers();
            
            this.renderDeck();
            
            this.renderTrash();
        },
        
        renderPlayers: function() {
            var player;
            
            this.$el.addClass("x" + this.model.players.team1.length);
            
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
        },
        
        renderTrash: function() {
            var trashView = new TrashView({
                model: this.model.trash
            });
            trashView.render();
        }
        
    });

    return CanastraView;
});