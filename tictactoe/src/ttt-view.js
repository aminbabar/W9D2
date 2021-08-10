

class View {
  constructor(game, el) {
    el.appendChild(this.setupBoard());
    this.game = game;
    this.el = el;
    // testing
    this.bindEvents();
  }

  setupBoard() {
    const ul = document.createElement('ul');
    for (let i = 0; i < 9; i++) {
      const li = document.createElement('li');
      li.classList.add(`${i}`, 'unclicked');
      // li.classList.add('unclicked');
      ul.appendChild(li);
    }
    return ul;
  }
  // [[0,0]. [0, 1]...]
  bindEvents() {
    
    let ul = document.querySelector('ul');
    this.handleClick = this.handleClick.bind(this);
    ul.addEventListener('click', this.handleClick)
  }

  handleClick(e) {
    let className = e.target.classList[0];
    let square = e.target;
    let positions = [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2,0], [2,1], [2,2]]
    // debugger;
    square.innerText = this.game.currentPlayer;
    this.game.playMove(positions[parseInt(className)]);
    this.makeMove(square);
  }

  makeMove(square) {
    square.classList.add("clicked");
    
    // console.log(this.game.winner());
    if (this.game.winner()) {
      
    }
  }

}

module.exports = View;
