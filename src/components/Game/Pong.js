import React from "react";
import Game, { GameState } from "./Engine/Game";
import InputHandler from "./tools/InputHandler";
import CollisionHandler from "./tools/CollisionHandler";
import "./pong.css";
import { Ball, Paddle, Score, VerticalLine } from "./Objects";
const input = new InputHandler();

class PongGame extends Game {
  constructor() {
    super("Pong");
    this.ball = null;
    this.state = GameState.paused;
    this.paddleP1 = null;
    this.paddleP2 = null;
    this.scoreP1 = null;
    this.scoreP2 = null;
    this.scoreLimit = 10;
    this.addHandler(new CollisionHandler(this));
    this.addHandler(input);
  }
  setup = () => {
    super.setup();
    // Initial Components
    this.ball = new Ball(this, this.width / 2, this.height / 2, 5); // Ball starts in center of screen
    this.scoreP1 = new Score(this, this.width / 4, 50, "#f8f8ff", "0");
    this.scoreP2 = new Score(this, (this.width / 4) * 3, 50, "#f8f8ff", "0");
    this.paddleP1 = new Paddle(
      this,
      50,
      this.height / 2 - 20,
      30,
      "KeyW",
      "KeyS"
    );
    this.paddleP2 = new Paddle(
      this,
      this.width - 50,
      this.height / 2 - 20,
      30,
      "ArrowUp",
      "ArrowDown"
    );
    this.centerLine = new VerticalLine(
      this,
      this.width / 2,
      0,
      1.5,
      this.height
    );
    this.addGameObject([
      this.ball,
      this.paddleP1,
      this.paddleP2,
      this.scoreP1,
      this.scoreP2,
      this.centerLine,
    ]);
    this.update(); // Initial draw
    setTimeout(this.update, 500);
  };
  start = () => {
    this.state = GameState.playing;
  };
  end = () => {
    this.state = GameState.playing;
  };
  togglePause = () => {
    if (this.state === GameState.paused) {
      this.state = GameState.playing;
      this.interval = setInterval(this.update, 16.7); // 60FPS
    } else {
      this.state = GameState.paused;
      clearInterval(this.interval);
    }
  };
}

class Pong extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: false,
      end: false,
      focus: false,
    };
    this.game = new PongGame();
  }

  startGame = () => {
    this.game.start();
  };

  lockChange = () => {
    if (document.pointerLockElement === this.board) {
      document.addEventListener("keydown", input.addKeyPress, false);
      document.addEventListener("keyup", input.removeKeyPress, false);
      this.game.togglePause();
      this.setState({ focus: true });
    } else {
      document.removeEventListener("keydown", input.addKeyPress, false);
      document.removeEventListener("keyup", input.removeKeyPress, false);
      this.game.togglePause();
      this.setState({ focus: false });
    }
  };

  componentDidMount() {
    this.game.setup();
    this.board = document.getElementById("game");
    this.board.onclick = () => this.board.requestPointerLock();
    document.addEventListener("pointerlockchange", this.lockChange);
  }

  componentWillUnmount() {
    document.removeEventListener("pointerlockchange", this.lockChange);
    this.board.removeEventListener("keydown", input.addKeyPress);
    this.board.removeEventListener("keyup", input.removeKeyPress);
  }

  render() {
    return (
      <div className="game-container">
        <div className="game-title">
          <h2>PONG</h2>
          {this.state.focus ? (
            <h4>
              Press <code>Esc</code> to pause/exit the game
            </h4>
          ) : (
            <h4> Click in game area to start!</h4>
          )}
        </div>

        <canvas
          width={this.state.canvasWidth}
          height={this.state.canvasHeight}
          id="game"
        ></canvas>
        <h4>Directions:</h4>
        <ul className="game-directions">
          <li>Click in the canvas above to start the game.</li>
          <li>
            Player 1 moves up and down with <code>W</code> and <code>S</code>
          </li>
          <li>
            Player 2 moves up and down with <code>Up</code> and{" "}
            <code>Down</code>
          </li>
        </ul>
      </div>
    );
  }
}

export default Pong;
