const View = require("./ttt-view")// require appropriate file
const Game = require("../ttt_node/game")// require appropriate file

document.addEventListener("DOMContentLoaded", () => {
  let game = new Game();
  
  const figure = document.querySelector('.ttt');
  let view = new View(game, figure)
});
