import {Geometry} from './Geometry';
class Point extends Geometry{
  x:number;
  y:number;
  geoType="Point";
  constructor(x:number=0,y:number = 0){
    super();
    this.x = x;
    this.y = y;
  }
  
}
export {Point};