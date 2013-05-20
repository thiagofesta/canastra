require(["domReady", "app/views/CanastraView", "app/models/Player", "app/models/Canastra"], function(domReady, CanastraView, Player, Canastra) {
    "use strict";
    
    domReady(function() {
        var canastraView,
            player1,
            player2,
            canastra;
        
        player1 = new Player({
            name: "John"
        });
        
        player2 = new Player({
            name: "Doe"
        });
        
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
    });
    
});