class Component {
  constructor(parent) {
    this.parent = parent;
  }
  draw() {}
  logic() {}
}

class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Box {
  constructor(x1, y1, x2, y2) {
    this.topLeft = { x: x1, y: y1 };
    this.botRight = { x: x2, y: y2 };
  }
  collidesWith = (r2) => {
    if (
      this.topLeft.x < r2.botRight.x &&
      this.botRight.x > r2.topLeft.x &&
      this.topLeft.y < r2.botRight.y &&
      this.botRight.y > this.topLeft.y
    ) {
      console.log("colliding");
      return true;
    } else {
      return false;
    }
  };
  move = (x1, y1, x2, y2) => {
    // console.log(`Moving to: ${x1},${y1} ${x2},${y2}`);
    this.topLeft = { x: x1, y: y1 };
    this.botRight = { x: x2, y: y2 };
  };
  center = () => {
    return {
      x: (this.botRight.x - this.topLeft.x) / 2,
      y: (this.botRight.y - this.topLeft.x) / 2,
    };
  };
}

class GameObject {
  constructor(parent, x, y, width, height) {
    this.parent = parent;
    this.pos = new Position(x, y);
    this.height = height;
    this.width = width;
    this.components = new Set();
    this.active = true;
    this.boundingBox = new Box(x, y, x + width, y + height);
    this.colliding = false;
  }
  move = (x, y) => {
    this.pos = new Position(x, y);
    this.boundingBox = new Box(x, y, x + this.width, y + this.height);
  };
  addComponent = (c) => {
    this.components.add(c);
  };
  removeComponent = (c) => {
    for (let component of this.components) {
      if (component instanceof c) {
        this.components.delete(component);
        return true;
      }
    }
    return false;
  };
  getComponent = (c) => {
    for (let component of this.components) {
      if (component instanceof c) {
        return component;
      }
    }
    return null;
  };
  draw() {
    for (let component of this.components) {
      component.draw();
    }
  }
  logic() {
    for (let component of this.components) {
      component.logic();
    }
  }
}

export { Component, Position, Box };
export default GameObject;
