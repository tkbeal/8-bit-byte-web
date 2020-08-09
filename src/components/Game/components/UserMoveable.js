import { Component } from "../Engine/GameObject";
import CollisionHandler from "../tools/CollisionHandler";
import Vector from "../tools/Vector";

class UserMoveable extends Component {
  constructor(parent, speed) {
    super(parent);
    this.speed = speed;
    this.base = new Vector(0, 0);
  }
  move = (dir) => {
    switch (dir) {
      case "left":
        this.parent.velocity = new Vector(-this.speed, 0);
        this.parent.parent.getHandler(CollisionHandler).addMoved(this.parent);
        break;
      case "right":
        this.parent.velocity = new Vector(this.speed, 0);
        this.parent.parent.getHandler(CollisionHandler).addMoved(this.parent);
        break;
      case "up":
        this.parent.velocity = new Vector(0, -this.speed);
        this.parent.parent.getHandler(CollisionHandler).addMoved(this.parent);
        break;
      case "down":
        this.parent.velocity = new Vector(0, this.speed);
        this.parent.parent.getHandler(CollisionHandler).addMoved(this.parent);
        break;
      default:
        this.parent.velocity = this.base;
        break;
    }
  };

  logic = () => {
    this.parent.move(
      this.parent.pos.x + this.parent.velocity.dx,
      this.parent.pos.y + this.parent.velocity.dy
    );
  };
}

export default UserMoveable;
