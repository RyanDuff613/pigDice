//Back End
// back end logic for game
function Game(){
  this.playerNames = [];
  this.playerScores =[];
  this.playerID = [];
}

function dieRoll(){
 return Math.floor(Math.random()*6) +1;
};

Game.prototype.addPlayer = function(player){
  this.playerNames.push(player);
}

Game.prototype.addPlayerScore = function(playerScore){
  this.playerScores.push(playerScore);
}

Game.prototype.compareScores = function(){
  //write function that evaluates all values held in playerScores array
  // if any value >=100 return playerScore and playerName saying 'congratulations, you won'
  // refresh page for new game
}

//back end logic for players
function Player(name) {
  this.playerName = name;
  this.currentId = 0;
  this.totalScore = 0;
}


Player.prototype.turn = function(player){
    var turnScore;
    var rollScore = dieRoll();
    if (rollScore === 1){ 
      turnScore = 0;
      // prompt next player to roll
    } else {
      this.turnScore += rollScore;
      // ask player to hold or roll again
    }
}

Player.prototype.hold = function(){
  //player.currentID.totalScore += turnScore;
}

Player.prototype.restart = function(){

}




// Front End
$(document).ready(function(){
  $("").submit(function(event) {
    event.preventDefault();
  })
});

