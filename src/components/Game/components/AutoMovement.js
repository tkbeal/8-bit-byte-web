import { Component } from "../Engine/GameObject";
import CollisionHandler from "../tools/CollisionHandler";

class AutoMovement extends Component {
  constructor(parent, bordered) {
    super(parent);
  }
  logic = () => {
    this.parent.move(
      this.parent.pos.x + this.parent.velocity.dx,
      this.parent.pos.y + this.parent.velocity.dy
    );
    // Add this component's game object to the collision handler's movement
    this.parent.parent.getHandler(CollisionHandler).addMoved(this.parent);
  };
}

export default AutoMovement;
