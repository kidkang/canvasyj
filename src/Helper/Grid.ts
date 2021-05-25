import {Vector2} from '../Math/Vector2';
import {Line} from '../Geometry/Line';
import {Vector} from '../Vector/Vector';
class Grid{
  size:number = 100;
  color1:string = '0x444444';
  color2:string = 'ox888888';
  constructor(size = 10,color1?:string,color2?:string){
    this.size = size;
    if(color1){
      this.color1 = color1;
    }
    if(color2){
      this.color2 = color2;
    }
  }
  vectors(layer){
    const {
      left,
      right,
      top,
      bottom
    } = layer.bounds;
    const style = {
      color:this.color1,
      fill : true,
      stroke:true,
      pointRadius:5,
      fillOpacity:0.6,
      strokeOpacity:1
    };
    const points = [];
    const vectors = [];
    //竖线
    for(let i = left;i <= right;i += this.size){
      const p0 = new Vector2(i,top);
      const p1 = new Vector2(i,bottom);
      if(i / this.size % 2 === 0 ){
        points.push(p0,p1);
      }else{
        points.push(p1,p0);
      }
    }
    const line = new Vector(new Line(points),style);
    vectors.push(line);
    const points1 = [];
    
    //横线
    for(let i = bottom;i<=top;i += this.size){
      const p0 = new Vector2(left,i);
      const p1 = new Vector2(right,i);
      if(i / this.size % 2 === 0 ){
        points1.push(p0,p1);
      }else{
        points1.push(p1,p0);
      }
    }
    const line1 = new Vector(new Line(points1),style);
    vectors.push(line1);

    //中间线加粗
    vectors.push(this.getBorderLine(new Vector2(left,0),new Vector2(right,0)));
    vectors.push(this.getBorderLine(new Vector2(0,bottom),new Vector2(0,top)));
    return vectors;
  }
  getBorderLine(...points){
    const style = {
      color: this.color2,
      fill : true,
      stroke:true,
      strokeWidth:2,
      pointRadius:5,
      fillOpacity:0.6,
      strokeOpacity:1,
    };
    return new Vector(new Line(points),style);
  }
}
export {Grid}