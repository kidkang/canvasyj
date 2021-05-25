import {Size} from '../Util/Size';
import {Bounds} from '../Util/Bounds';
import {Canvas} from '../Renderder/Canvas';
import {Vector} from '../Vector/Vector';
import defaultStyle from '../Util/Style';
class Layer {
  div: HTMLDivElement;
  size:Size;
  bounds:Bounds;
  maxBounds:Bounds;
  zoom:number = 100;
  vectors = null;
  vectorsCount:number = 0;
  renderer:Canvas;
  res:number=0;
  center = null;
  constructor(div: HTMLDivElement) {
    const size = new Size(parseInt(div.style.width),parseInt(div.style.height));
    this.size = size;
    this.div = div;
    this.bounds = new Bounds(-size.w / 2, -size.h / 2,size.w / 2, size.h/2);
    this.maxBounds = this.bounds.clone();
    this.center = this.bounds.getCenter();
    this.zoom = 100;
    this.getRes();
    this.vectors = {};
    this.vectorsCount = 0;
    this.renderer = new Canvas(this);
  }
  getRes(){
    this.res = 1 / (this.zoom / 100);
    return this.res;
  }
  addVectors(vectors:Vector[]){
    this.renderer.lock = true;
    for(let i =0,len = vectors.length;i < len;i++){
      if(i === (len - 1)){
        this.renderer.lock = false;
      }
      this.vectors[vectors[i].id] = vectors[i];
      this.drawVector(vectors[i]);
    }
    this.vectorsCount += vectors.length;
  }
  drawVector(vector){
    let {style} = vector;
    if(!style){
      style = defaultStyle;
    }
    this.renderer.drawGeometry(vector.geometry,style);
  }
  moveTo(zoom,center=null){
    this.zoom = zoom;
    if(!center){
      center = this.center;
    }
    const res = this.getRes();
    const width = this.size.w * res;
    const height = this.size.h * res;
    const bounds = new Bounds(center.x - width / 2,center.y- height / 2,center.x + width / 2, center.y + height / 2);
    this.bounds = bounds;

    let index = 0;
    this.renderer.lock = true;
    for(let id in this.vectors){
      index++;
      if(index === this.vectorsCount){
        this.renderer.lock = false;
      }
      this.drawVector(this.vectors[id]);
    }
  }
}
export {
  Layer
};