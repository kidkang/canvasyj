import {
  Point
} from './Point';
class Circle extends Point {
  x: number;
  y: number;
  radius: number;
  
  constructor(x, y, radius) {
    super(x, y);
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.geoType =  "Circle";
  }
}
export {
  Circle
}