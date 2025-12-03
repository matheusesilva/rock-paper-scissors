# Rock Paper Scissors – JavaScript Implementation

This repository contains a simple Rock–Paper–Scissors game implemented in JavaScript.

## Project Structure

- **javascript.js**  
  Contains all game logic, including:
  - Random computer move selection  
  - Player input handling  
  - Round-by-round winner evaluation  
  - Score tracking until either the player or the computer reaches 3 wins

## How the Game Works

1. The player is prompted to choose **rock**, **paper**, or **scissors**.
2. The computer randomly selects one of the three options.
3. The script determines the winner of the round and displays the result.

## Main Functions

- `getComputerChoice()`  
  Randomly selects one option from `["rock", "paper", "scissors"]`.

- `getPlayerChoice()`  
  Prompts the player and normalizes input to lowercase.

- `winnerRound()`  
  Compares the choices and returns `"Player"`, `"Computer"`, or `"Tie"`.

- `newGame()`  
  Runs rounds until one side wins 3 times and displays score updates.

## Running the Game

Simply open the HTML file that includes `javascript.js` in a web browser.
Or, visit the GitHub webpage: https://matheusesilva.github.io/rock-paper-scissors/

The game begins automatically when `newGame()` is called at the end of the script.

