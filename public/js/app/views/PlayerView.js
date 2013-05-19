define(["app/views/CardView", "backbone"], function(CardView) {
    "use strict";
    
    var PlayerView = Backbone.View.extend({
        events: {
            "click .icon":          "open",
            "click .button.edit":   "openEditDialog",
            "click .button.delete": "destroy"
        },
        
        initialize: function(options) {
            
        },
        
        render: function() {
            var cardView;
            
            this.model.get("cardsOnHand").each(function(item) {
                cardView = new CardView({
                    className: item.getClassName()
                });
                cardView.render();
                this.$el.find("ul").append(cardView.el);
            }, this);
        }
        
    });

    return PlayerView;
});