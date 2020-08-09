import GameObject from "./Engine/GameObject";
import Vector from "./tools/Vector";
import Draw from "./components/Draw";
import AutoMovement from "./components/AutoMovement";
import Collidable from "./components/Collidable";
import CollisionHandler from "./tools/CollisionHandler";
import UserMoveable from "./components/UserMoveable";
import { GameState } from "./Engine/Game";
import InputHandler from "./tools/InputHandler";

class Ball extends GameObject {
  constructor(parent, x, y, r) {
    super(parent, x, y, r * 2, r * 2);
    this.radius = r;
    this.color = "#f8f8ff";
    this.velocity = new Vector(-3, 0);
    this.addComponent(new Draw(this, this.color));
    this.addComponent(new AutoMovement(this, this.velocity));
    this.parent.getHandler(CollisionHandler).addCollidable(this);
  }
  draw = (ctx) => {
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    super.draw("ball");
  };
  logic = () => {
    if (this.parent.gameState !== GameState.paused) {
      // if (this.y - this.speed > 0) {
      //   this.getComponent(Movement).move("up");
      // } else {
      //   this.y = 0;
      // }
      super.logic();
    }
  };
}

class Paddle extends GameObject {
  constructor(parent, x, y, h, up, down) {
    super(parent, x, y, 5, h);
    this.speed = 5;
    this.velocity = new Vector(0, 0);
    this.upKey = up;
    this.downKey = down;
    this.color = "#f8f8ff";
    this.input = this.parent.getHandler(InputHandler);
    this.addComponent(new UserMoveable(this, this.speed));
    this.addComponent(new Draw(this, this.color));
    this.parent.getHandler(CollisionHandler).addCollidable(this);
  }
  draw = (ctx) => {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
    super.draw("paddle");
  };
  logic = () => {
    if (this.parent.gameState !== GameState.paused) {
      if (this.input.isPressed(this.upKey)) {
        let top = 0 + 5;
        if (this.pos.y > top) {
          this.getComponent(UserMoveable).move("up");
        } else {
          this.pos.y = top;
        }
      } else if (this.input.isPressed(this.downKey)) {
        let bottom = this.parent.height - this.height - 5;
        if (this.pos.y < bottom) {
          this.getComponent(UserMoveable).move("down");
        } else {
          this.pos.y = bottom;
        }
      } else {
        this.getComponent(UserMoveable).move("na");
      }
      super.logic();
    }
  };
}

class Score extends GameObject {
  constructor(parent, x, y, color, text) {
    super(parent, x, y);
    this.score = text;
    this.color = color;
    this.addComponent(new Draw(this, this.color));
  }
  draw(ctx) {
    ctx.textAlign = "center";
    ctx.fillStyle = this.color;
    ctx.font = "2rem 'Press Start 2P'";
    ctx.fillText(this.score, this.pos.x, this.pos.y);
    super.draw("score");
  }
  setScore(score) {
    this.score = score;
  }
}

class VerticalLine extends GameObject {
  constructor(parent, x, y, width, height) {
    super(parent, x, y, width, height);
    this.color = "#f8f8ff";
    this.addComponent(new Draw(this, this.color));
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.setLineDash([8, 8]);
    ctx.moveTo(this.pos.x, this.pos.y);
    ctx.lineTo(this.pos.x, this.height);
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 1.5;
    ctx.stroke();
    super.draw("Line");
  }
}

export { Ball, Paddle, VerticalLine, Score };
