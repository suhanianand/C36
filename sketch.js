var db;
var gs=0;
var pc, form, game, player, allPlayers;

function setup(){
    createCanvas(500,500);
    db= firebase.database();
    game= new Game();
    game.readGameState();
    game.startGame();
}

function draw(){
if(pc===2){
    game.writeGameState(1);
}

if(gs===1){
    clear();
    game.play();
}
}

