import {Vector2} from '../Math/Vector2';
import {Line} from '../Geometry/Line';
import {LinerRing} from '../Geometry/LinerRing';
import {Vector} from '../Vector/Vector';
import defaultStyle from '../Util/Style';
import {Matrix3} from '../Math/Matrix3';
class Arrow{
  p:Vector2;
  origin:Vector2 = new Vector2(0,0);
  hex:string = 'green';
  style = {};
  constructor(p,origin = null,hex?:string){
    if(origin){
      this.origin = origin
    }
    if(hex){
      this.hex = hex;
    }
    this.p = p;
    this.setStyle();
  }
  setStyle(){
    const style = {};
    Object.assign(style,defaultStyle,{
      color:this.hex
    });
    this.style = style;
  }
  vectors(){
    const vectors = [];
    vectors.push(this.setLine());
    vectors.push(this.setArrow());
    return vectors;
  }
  setArrow(){
    const points = [
      new Vector2(0,0),
      new Vector2(-3,1),
      new Vector2(-3,-1)
    ];
    const m = this.getArrowTranslate();
    for(let i = 0;i<points.length;i++){
      points[i].applyMatrix3(m);
    }
    const arrow = new LinerRing(points);
    return new Vector(arrow,this.style);
  }
  getArrowTranslate(){
    const p = this.p.clone();
    const origin = this.origin.clone();
    const angle = p.sub(origin).angle();
    const scalar = 4;
    const tx = p.x + origin.x;
    const ty = p.y + origin.y;
    const m0 = new Matrix3();
    m0.set(
        Math.cos(angle),-Math.sin(angle),0,
        Math.sin(angle),Math.cos(angle),0,
        0,0,1
    );
    const m1 = new Matrix3();
    m1.set(
        scalar,0,0,
        0,scalar,0,
        0,0,1
    );
    const m2 = new Matrix3();
    m2.set(
        1,0,tx,
        0,1,ty,
        0,0,1
    );
    return m0.premultiply(m1).premultiply(m2);

  }
  setLine(){
    const line = new Line([
      this.p,this.origin
    ]);
    return new Vector(line,this.style);
  }
}
export {Arrow}