const View = require("./ttt-view")// require appropriate file
const Game = require("../ttt_node/game")// require appropriate file

document.addEventListener("DOMContentLoaded", () => {
  let game = new Game();
  let view = new View(game)

  const figure = document.querySelector('.ttt');
});
