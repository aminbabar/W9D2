class View {
  constructor(game, el) {
    el.appendChild(this.setupBoard());
    this.el = el;
  }

  setupBoard() {
    const ul = document.createElement('ul');
    for (let i = 1; i < 10; i++) {
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
    ul.addEventListener('click', this.handleClick)
  }

  handleClick(e) {

  }

  makeMove(square) {}

}

module.exports = View;
