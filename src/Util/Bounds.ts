class Bounds {
  left: number;
  right: number;
  bottom: number;
  top: number;
  constructor(x1, y1, x2, y2) {
    this.left = x1;
    this.right = x2;
    this.bottom = y1;
    this.top = y2;
  }
  getCenter() {
    const w = this.right - this.left;
    const h = this.top - this.bottom;
    const x = this.left + w / 2,
      y = this.bottom + h / 2;
    return {
      x,
      y
    };
  }
  extend(bounds) {
    if (this.left > bounds.left) {
      this.left = bounds.left;
    }
    if (this.bottom > bounds.bottom) {
      this.bottom = bounds.bottom;
    }
    if (this.right < bounds.right) {
      this.right = bounds.right;
    }
    if (this.top < bounds.top) {
      this.top = bounds.top;
    }
  }
  clone() {
    return new Bounds(this.left, this.bottom, this.right, this.top);
  }
}
export {
  Bounds
}