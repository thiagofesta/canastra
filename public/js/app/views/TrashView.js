define(["app/views/CardView", "backbone"], function(CardView) {
    "use strict";
    
    var DeckView = Backbone.View.extend({
        el: "#trash",
        
        initialize: function() {
        },
        
        render: function() {
            var cardView;
            
            this.$el.find("ul").empty();
            
            this.model.get("cards").each(function(card) {
                cardView = new CardView({
                    className: card.getClassName()
                });
                cardView.render();
                this.$el.find("ul").prepend(cardView.el);
            }, this);
        }
        
    });

    return DeckView;
});