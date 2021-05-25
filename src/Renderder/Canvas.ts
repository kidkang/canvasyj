import {Layer} from '../Layer/Layer';
import {Size} from '../Util/Size';
import {Geometry} from '../Geometry/Geometry';
import * as driver from './Canvas/';
class Canvas {
  canvas:HTMLCanvasElement;
  context:CanvasRenderingContext2D;
  lock:boolean = true;
  layer:Layer;
  geometries = {};
  constructor(layer:Layer) {
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
    this.lock = true;
    this.layer = layer;
    this.setSize(layer.size);
    layer.div.appendChild(this.canvas);
  }
  setSize(size:Size){
    this.canvas.width = size.w;
    this.canvas.height = size.h;
    this.canvas.style.width = `${size.w}px`;
    this.canvas.style.height = `${size.h}px`;
  }
  drawGeometry(geometry:Geometry,style){
    this.geometries[geometry.id] = [geometry,style];
    if(!this.lock){
      this.redraw();
    }
  }

  redraw(){
    this.context.clearRect(0,0,this.layer.size.w,this.layer.size.h);
    if(!this.lock){
      for(let id in this.geometries){
        if(this.geometries.hasOwnProperty(id)){
          this.draw(this.geometries[id][0],this.geometries[id][1]);
        }
      }
    }
  }
  draw(geometry,style){
    const drawer = driver[geometry.geoType];
    if(drawer){
      return drawer.call(this,geometry,style);
    }
    throw new Error('Canvas renderder driver['+geometry.geoType+'] not exists!');
  }

  setCanvasStyle(type,style){
    switch (type) {
      case "fill":
        this.context.globalAlpha = style.fillOpacity;
        this.context.fillStyle = style.fillColor;
        break;
      case 'stroke':
        this.context.globalAlpha = style.strokeOpacity;
        this.context.strokeStyle = style.strokeColor;
        this.context.lineWidth = style.strokeWidth;
        break;
      default:
        this.context.globalAlpha = 0;
        this.context.lineWidth = 1;
        break;
    }
  }
  getLocalXY(point){
    const resolution = this.layer.zoom / 100;
    const extent = this.layer.bounds;
    const x = (point.x - extent.left ) * resolution;
    const y = (extent.top - point.y) * resolution;
    return {x,y}
  }
}
export {
  Canvas
}