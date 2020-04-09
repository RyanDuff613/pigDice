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

Game.prototype.roll = function(){
  var rollScore = dieRoll();
  console.log('the dice rolled:'+ rollScore);
  if (rollScore === 1){ 
    this.turnScore = 0;
    // prompt next player to roll
  } else {
    this.turnScore += rollScore;
    $('#roll').text('roll again?');
  }
  //this.players.playerId/* [#] */.totalScore += this.turnScore;
}

/* Game.prototype.hold() = function(){
  this.players[?].totalScore += this.turnScore;
} */

Game.prototype.compareScores = function(){
  //write function that evaluates all values held in playerScores array
  // if any value >=100 return playerScore and playerName saying 'congratulations, you won'
  // refresh page for new game
}

//back end logic for players
function Player(name) {
  this.playerName = name;
  this.totalScore = 0;
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
    $('#player1name').text(player1name);
    $('#player2name').text(player2name);
    $('#player1totalScore').text(player1.totalScore);
    $('#player2totalScore').text(player2.totalScore);
    console.log(game);
    console.log(player1);
    console.log(player2);

    $('#roll').click(function(){
      game.roll();
      $('#turnPoints').text(game.turnScore);
      //console.log('roll button works')
    });

    $('#hold').click(function(){
      game.hold();
      //console.log('hold button works')
    });
  })
});

