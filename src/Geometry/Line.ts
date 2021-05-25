import {Geometry} from './Geometry';
import {Point} from './Point';
import {Bounds} from '../Util/Bounds';
class Line extends Geometry{
  points:Point[] = [];
  constructor(points){
    super();
    this.points = points;
    this.geoType = "Line";
  }
  getBounds(){
    if(!this.bounds){
      const p0 = this.points[0];
      this.bounds = new Bounds(p0.x,p0.y,p0.x,p0.y);
      for(let i =0,len = this.points.length;i < len;i++){
        const point = this.points[i];
        const bounds = new Bounds(point.x,point.y,point.x,point.y);
        this.bounds.extend(bounds);
      }
    }
    return this.bounds;
  }
}
export {Line};