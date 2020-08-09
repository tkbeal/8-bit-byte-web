import Collidable from "../components/Collidable";
import Vector from "./Vector";
import { Ball } from "../Objects";

class CollisionHandler {
  constructor(parent) {
    this.moved = [];
    this.collidables = [];
  }
  addMoved = (e) => {
    this.moved.push(e);
  };
  clearMoved = (e) => {
    this.moved = [];
  };
  addCollidable = (e) => {
    this.collidables.push(e);
  };
  checkCollisions = () => {
    console.log("Moved", this.moved);
    for (let c1 of this.moved) {
      //Check all objects that moved against all collidable objects
      for (let c2 of this.collidables) {
        console.log(c1, c2);
        if (c1 !== c2 && c1.boundingBox.collidesWith(c2.boundingBox)) {
          c1.colliding = true;
          c2.colliding = true;
        }
      }
    }
  };
  clearCollisions = () => {
    for (let obj of this.collidables) {
      // console.log(obj);
      obj.colliding = false;
    }
  };
  resolveCollisions = () => {
    for (let c1 of this.collidables) {
      // let colNorm = new Vector(
      //   c2.boundingBox.center().x - c1.boundingBox.center().x,
      //   c2.boundingBox.center().y - c1.boundingBox.center().y
      // ).normalize();
      // let relativeVelocity = c1.velocity.subtract(c2.velocity);
      // let speed =
      //   relativeVelocity.dx * colNorm.dx + relativeVelocity.dy * colNorm.dy;
      // Don't care about negative speed
      // if (speed < 0) {
      //   console.log("negative speed");
      //   break;
      // } else {
      if (c1.colliding) {
        if (c1 instanceof Ball) {
          c1.velocity.dx = -c1.velocity.dx;
          console.log(c1.velocity);
        }

        // }
      }
    }
  };
  logic = () => {
    // Reset collision state first
    this.clearCollisions();
    // Now check for new collisions and resolve them
    this.checkCollisions();
    this.resolveCollisions();
    // Clear moved array, get ready for next iteration
    this.clearMoved();
  };
}

export default CollisionHandler;
