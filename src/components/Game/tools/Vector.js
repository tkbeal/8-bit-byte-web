class Vector {
  constructor(dx, dy) {
    this.dx = dx;
    this.dy = dy;
    this.magnitude = Math.sqrt(dx * dx + dy * dy);
  }
  add = (v2) => {
    return new Vector(this.dx + v2.dx, this.dy + v2.dy);
  };
  subtract = (v2) => {
    return new Vector(this.dx - v2.dx, this.dy - v2.dy);
  };
  normalize = () => {
    // Divide the vector by its magnitude
    return new Vector(this.dx / this.magnitude, this.dy / this.magnitude);
  };
}

export default Vector;
