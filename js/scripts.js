//Back End
// back end logic for game
function dieRoll(){
  return Math.floor(Math.random()*6) +1;
 };

function Game(){
  this.players = [];
  this.currentId = 0;
  this.turnScore = 0;
  this.whoseTurn = 0;
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
  $('#diceRoll').text(rollScore);
  if (rollScore === 1){ 
    this.turnScore = 0;
    this.switchTurn();
  } else {
    this.turnScore += rollScore;
    $('#roll').text('roll again ' + this.players[this.whoseTurn].playerName +'?');
  }
}

Game.prototype.hold = function(playerArrayAddress){
  this.players[playerArrayAddress].totalScore += this.turnScore;
  this.turnScore = 0;
  this.endGame();
  this.switchTurn();
}

Game.prototype.switchTurn= function(){
  if (this.whoseTurn === 0){
    this.whoseTurn = 1;
    $('#diceRoll').text('');
  }else {
    this.whoseTurn = 0; 
  }
  this.turnScore = 0;
  $('#roll').text(this.players[this.whoseTurn].playerName + "'s roll");
}

Game.prototype.endGame= function(){
  if(this.players[0].totalScore >= 10){
    $('#winnerName').text(this.players[0].playerName);
    $('#winner').show();
    //alert(this.players[0].playerName + 'is the winner!');
  }else if(this.players[1].totalScore >=10){
    $('#winnerName').text(this.players[1].playerName);
    $('#winner').show();
    //alert(this.players[1].playerName + 'is the winner!');
  } else{
  }
}

//back end logic for players
function Player(name) {
  this.playerName = name;
  this.totalScore = 0;
}

// Front End
$(document).ready(function(){
  $("#inputPanel").submit(function(event) {
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
    $('#roll').text('roll the dice ' + game.players[game.whoseTurn].playerName)
    
    $('#roll').click(function(){
      game.roll();
      $('#turnPoints').text(game.turnScore);
    });

    $('#hold').click(function(){
      game.hold(game.whoseTurn);
      $('#turnPoints').text(game.turnScore);
      $('#diceRoll').text('');
      $('#player1totalScore').text(player1.totalScore);
      $('#player2totalScore').text(player2.totalScore);
      $('#roll').text(game.players[game.whoseTurn].playerName + "'s roll");
    });

  })
});

