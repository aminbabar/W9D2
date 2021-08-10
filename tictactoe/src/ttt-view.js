class View {
  constructor(game, el) {
    el.appendChild(this.setupBoard());
  }

  setupBoard() {
    const ul = document.createElement('ul');
    for (let i = 1; i < 10; i++) {
      const li = document.createElement('li');
      li.classList.add(`${i}`);
      ul.appendChild(li);
    }
    return ul;
  }
  // [[0,0]. [0, 1]...]
  bindEvents() {

  }

  handleClick(e) {

  }

  makeMove(square) {}

}

module.exports = View;
