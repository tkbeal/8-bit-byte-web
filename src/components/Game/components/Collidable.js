import { Component } from "../Engine/GameObject";
import Vector from "../tools/Vector";
import { Ball } from "../Objects";

class Collidable extends Component {
  constructor(parent, bounce) {
    super(parent);
    this.collisions = [];
    // Object specific collision function override option
    this.bounce = bounce || false;
  }
  collidedWith = (c) => {
    this.collisions.push(c);
  };

  clear = () => {
    this.collisions = [];
  };

  logic = () => {
    if (this.collisions.length > 0) {
      let col1 = this.parent;
      for (let col2 of this.collisions) {
        let colNorm = new Vector(
          col2.boundingBox.center().x - col1.boundingBox.center().x,
          col2.boundingBox.center().y - col1.boundingBox.center().y
        ).normalize();
        let relativeVelocity = col1.velocity.subtract(col2.velocity);
        let speed =
          relativeVelocity.dx * colNorm.dx + relativeVelocity.dy * colNorm.dy;
        // Don't care about negative speed
        if (speed < 0) {
          console.log("negative speed");
          break;
        } else {
          if (col1 instanceof Ball) {
            col1.velocity.dx = -col1.velocity.dx;
            console.log(col1.velocity);
          }
        }
      }
    }
  };
}

export default Collidable;
