// "Enum" for game state
const GameState = {
  menu: "Menu",
  playing: "Playing",
  gameover: "Game Over",
  paused: "Paused",
};

class Game {
  constructor(name) {
    this.name = name;
    this.canvas = null;
    this.objects = [];
    this.handlers = new Set();
    this.state = null;
  }
  setup() {
    // General things every 2D Game will have/need
    this.canvas = document.getElementById("game");
    this.width = Math.min(window.innerWidth * 0.8, 600);
    this.height = (this.width / 16) * 9; // 16:9
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.context = this.canvas.getContext("2d");
  }
  getHandler = (h) => {
    for (let handle of this.handlers) {
      if (handle instanceof h) {
        return handle;
      }
    }
    return null;
  };
  addHandler = (h) => {
    this.handlers.add(h);
  };
  //@params n: Array
  addGameObject = (n) => {
    this.objects.push(...n);
  };
  draw = () => {
    for (let object of this.objects) {
      object.draw(this.context);
    }
  };
  logic = () => {
    for (let object of this.objects) {
      object.logic();
    }
    for (let handle of this.handlers) {
      handle.logic();
    }
    // Purge object list of any objects no longer in play
    // let objectsInPlay = [];
    // for (let object of this.objects) {
    //   if (!object.active)
    //     objectsInPlay = this.objects.filter((x) => x !== object);
    // }
  };
  clear = () => {
    this.context.clearRect(0, 0, this.width, this.height);
  };
  update = () => {
    // Update objects and handlers logic, respectively
    this.logic();
    // Clear current game board
    this.clear();
    // Redraw objects based on new logic
    this.draw();
  };
}

export { GameState };
export default Game;
