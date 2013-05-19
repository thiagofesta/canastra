require(["app/models/Deck"], function(Deck) {
    describe("Deck class", function() {
        var deck;
        
        beforeEach(function() {
            deck = new Deck();
        });
        
        it("should exists", function() {
            expect(Deck).toBeDefined();
        });
        
        it("each deck should be initialized with 108 card", function() {
            expect(deck.get("cards").length).toBe(108);
        });
        
        it("each deck should contains complete suits for each value", function() {
            // TODO
        });
        
        it("each deck should contains 4 jokers", function() {
            var jokers = deck.get("cards").filter(function(card) {
                if(card.get("value").id === 0) {
                    return true;
                }
            });
            expect(jokers.length).toBe(4);
        });
        
    });
});