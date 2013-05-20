define(["app/views/CardView", "backbone"], function(CardView) {
    "use strict";
    
    var DeckView = Backbone.View.extend({
        el: "#deck",
        
        initialize: function() {
        },
        
        render: function() {
            var cardView;
            
            this.$el.find("ul").empty();
            
            this.model.get("cards").each(function(card) {
                cardView = new CardView({
                    className: card.getClassName(true)
                });
                cardView.render();
                this.$el.find("ul").append(cardView.el);
            }, this);
        }
        
    });

    return DeckView;
});