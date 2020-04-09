# Pig Dice

###### created by **Ryan Duff**
---
## Purpose
###### This project is intended to increase my knowledge of and comfortability with creating and manipulating Javascript objects. It is a game which takes two players. Players input their names, then 'roll' a dice. The value of the dice rolled add cumulatively to their score for each turn. The player can choose to roll the dice and add to their total score for the turn as many times as they wish but if they roll a 1, they lose all points accumulaated within that turn and forfeit their turn to the opposing player. A player may also elect to 'hold', in which case the points accumulated on that turn are added to their total score and the opposing player begins the next 'turn'. The game ends when either player attains a total score of 100 or greater.
### Specs
| Spec | Input | Output |
|User inputs player names, pushes submit button and game begins|2 user names, hit submit|user names are displayed on page and user 1 is prompted to 'roll'|
|User 'rolls' and is given their total score, the value of their dice roll and the value of the total points accrued on their turn|press dice roll button|total score is displayed, value of 'roll' is displayed, value of turn points displayed, user is given option to roll again or 'hold'|
|if roll value equals 1, next player is given a 'turn' and prompter to roll|roll value=1|player2 is prompted to begin their turn by rolling dice|
|if roll value is other than 1, roll value is added to turn points and user is prompted to either role again or hold|roll value > 1|roll value added to turn points, prompts user to roll again or hold|
|If player elects to hold, turn points are added to that players total points and next player is prompted to roll|user clicks hold button|turn points added to total points, next player prompter to begin their turn by rolling dice|
|When either players total points exceed 100, that player is declared the winner and the game is over|players total points >= 100|game announces winner, ends game|


---
## Setup Requirements
 * Any web browser will be able to display contents of this program. 
 1. Open web browser of your choosing.
 2. Use toolbar: File>Open File...> *select* index.html
---
### Tech Used
* *HTML*
* *CSS*
* *git*
* *gitHub*
* *Bootstrap*
* *jQuery*
* *JavaScript*
---
### Known Bugs
 * 
---
### Licensing
###### MIT License, copyright Ryan Duff (c) 2020
---