class View {
  constructor(game, el) {}

  setupBoard() {
    const ul = document.createElement('ul');
    for (let i = 1; i < 10; i++) {
      const li = document.createElement('li');
      li.classList.add(`${i}`);
      ul.appendChild(li);
    }
  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
