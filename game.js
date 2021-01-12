class Game{
 constructor(){
}
readGameState(){
    db.ref('gameState').on("value",function(data){
        gs=data.val()
    })
}
writeGameState(state){
    db.ref('/').update({gameState:state})
}
async startGame(){
    if (gs===0){
      player= new Player();
      var playerCountRef= await db.ref('playerCount').once("value")
      if(playerCountRef.exists()){
        pc=playerCountRef.val()
        player.getCount();
      }
        form= new Form();
        form.display();
    }
}
play(){
    form.hide();
    Player.getPlayerInfo();
    if(allPlayers!== undefined){
        var displayPosition= 130;
        for(var plr in allPlayers){
            if(plr==="player"+player.index){
                fill ("red")
            }
              else{
                  fill ("black")
              }
            displayPosition+=20
            textSize(15)
            text(allPlayers[plr].name+": "+ allPlayers[plr].distance,120,displayPosition)
                      
        }
    }
}
}