import { Component } from "../Engine/GameObject";

class Draw extends Component {
  constructor(parent, color) {
    super(parent);
    this.color = color;
  }

  logic() {
    super.logic();
  }
  draw() {}
}

export default Draw;
