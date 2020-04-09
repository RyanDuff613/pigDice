//Back End
// back end logic for game
function dieRoll(){
  return Math.floor(Math.random()*6) +1;
 };

function Game(){
  this.players = [];
  this.currentId = 0;
  this.turnScore = 0;
}

Game.prototype.addPlayer = function(player){
  player.playerId = this.assignId();
  this.players.push(player);
}

Game.prototype.assignId =function(){
  this.currentId += 1;
  return this.currentId;
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


// Front End
$(document).ready(function(){
  $("#enterNames").submit(function(event) {
    event.preventDefault();
    var game = new Game;
    var player1name = $('#player1').val();
    var player2name = $('#player2').val();
    var player1 = new Player(player1name);
    var player2 = new Player(player2name);
    game.addPlayer(player1);
    game.addPlayer(player2);
    console.log(game);
    console.log(player1);
    console.log(player2);
  })
});

