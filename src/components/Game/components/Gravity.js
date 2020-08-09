import { Component } from "../Engine/GameObject";

class Gravity extends Component {
  constructor(parent, g, speed) {
    super(parent);
    this.g = 0.2;
    this.pos = parent.pos;
  }

  logic = () => {};
}

export default Gravity;
