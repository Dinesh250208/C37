class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref("gameState")
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })

    }
    updateState(state){
        database.ref('/').update({
          gameState: state,
          
        })
      }
     async start(){
         if(gameState === 0 ){
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
              player.getCount()
            }
            form = new Form();
            form.display();
           
          }
      }
      play(){
          //form.hide_details();
          textSize(20);
          text("GAME START !!" , 120,100);
          Player.getPlayerInfo();
          var display_position = 130;
          if(allPlayers !== undefined){
            for(var i = 1; i < playerCount + 1; i = i+1){
              var plrkey = "player" + (i)
              if(plrkey === ("player" + player.index)){
                 fill("red");
              }else{fill("black")}
              display_position += 20;
              text(allPlayers[plrkey].name + ":" + allPlayers[plrkey].distance,120,display_position)
              }
            }
            if(keyIsDown(UP_ARROW) && player.index !== null){
              player.distance += 50;
              player.update();
            }
        }
      }
