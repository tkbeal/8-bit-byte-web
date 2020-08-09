class InputHandler {
  constructor() {
    this.pressed = [];
  }
  addKeyPress = (e) => {
    // console.log(e.code);
    e.preventDefault();
    if (!this.pressed.includes(e.code)) {
      this.pressed.push(e.code);
    }
  };
  removeKeyPress = (e) => {
    e.preventDefault();
    if (this.pressed.includes(e.code)) {
      this.pressed = this.pressed.filter((x) => x !== e.code);
    }
  };
  isPressed(k) {
    return this.pressed.includes(k);
  }
  getPressed() {
    return this.pressed;
  }
  logic = () => {};
}

export default InputHandler;
