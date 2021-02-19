class Player{
    constructor(){
        this.name = null;
        this.index = null;
        this.distance = 0;
    }
    getCount(){
        var playerCountRef = database.ref("playerCount")
        playerCountRef.on("value",function(data){
            playerCount = data.val();
        })
    }
    updateCount(count){
        database.ref('/').update({
          playerCount: count});
      }
    update(){
        var playerdb = "players/player" + this.index
        database.ref(playerdb).set({name:this.name,distance:this.distance})
        
    }
    static getPlayerInfo(){
        var playerdb = database.ref("players")
        playerdb.on("value",function(data){
            allPlayers = data.val();
        
        })
    }
}