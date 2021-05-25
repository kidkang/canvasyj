import {
  Line
} from './Line';
class LinerRing extends Line {
  constructor(points) {
    super(points);
    this.geoType = 'LinerRing'
    if (points) {
      this.points = points;
      const len = points.length;
      if (this.points[0].x != this.points[len - 1].x || this.points[0].y != this.points[len - 1].y) {
        this.points.push(this.points[0].clone());
      }
    }
  }
}
export {
  LinerRing
}