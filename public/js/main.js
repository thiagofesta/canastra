require(["domReady", "app/views/CanastraView", "app/models/Player", "app/models/Canastra"], function(domReady, CanastraView, Player, Canastra) {
    "use strict";
    
    domReady(function() {
        var canastraView,
            player1,
            player2,
            player3,
            player4,
            canastra;
        
        player1 = new Player({
            name: "John"
        });
        
        player2 = new Player({
            name: "Doe"
        });
        
//        player3 = new Player({
//            name: "Sulivan"
//        });
//        
//        player4 = new Player({
//            name: "James"
//        });
        
        canastra = new Canastra({
            starts: player1,
            players: {
                team1: [
                    player1
                ],
                team2: [
                    player2
                ]
            }
        });
        
        
        
        canastraView = new CanastraView({
            model: canastra
        });
        canastraView.render();
        
        window.canastraView = canastraView;
        
        
        // getting from deck
//        var card = canastraView.model.deck.getCard()
//        canastraView.model.players.team1[0].get("cardsOnHand").add(card)
//        canastraView.render()




        // send to trash
//        var card = canastraView.model.players.team1[0].get("cardsOnHand").get("spade-10-1")
//        canastraView.model.players.team1[0].get("cardsOnHand").remove(card)
//        canastraView.model.trash.get("cards").add(card)
//        canastraView.render()
    });
    
});