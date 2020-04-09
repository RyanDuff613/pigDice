//Back End
// back end logic for game
function dieRoll(){
  return Math.floor(Math.random()*6) +1;
 };

function Game(){
  this.players = [];
  this.currentId = 0;
}

Game.prototype.addPlayer = function(player){
  player.playerId = this.assignId();
  this.players.push(player);
}


Game.prototype.compareScores = function(){
  //write function that evaluates all values held in playerScores array
  // if any value >=100 return playerScore and playerName saying 'congratulations, you won'
  // refresh page for new game
}

//back end logic for players
function Player(name) {
  this.playerName = name;
  this.playerId = 0;
  this.totalScore = 0;
}

Player.prototype.turn = function(){
    var turnScore;
    var rollScore = dieRoll();
    if (rollScore === 1){ 
      turnScore = 0;
      console.log(turnScore);
      // prompt next player to roll
    } else {
      turnScore += rollScore;
      console.log(turnScore);
      // ask player to hold or roll again
    }
    this.totalScore += turnScore;
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

