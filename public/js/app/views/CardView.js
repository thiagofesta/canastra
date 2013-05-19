define(["backbone"], function() {
    "use strict";
    
    var CardView = Backbone.View.extend({
        tagName: "li",
        className: "",
        
        initialize: function() {
        },
        
        render: function() {
            return this;
        }
        
    });

    return CardView;
});