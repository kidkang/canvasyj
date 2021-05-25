import {
  Geometry
} from '../Geometry/Geometry';
let _vectorId = 0;
class Vector {
  id: string;
  attributes?;
  geometry:Geometry;
  style = null;
  constructor(geometry: Geometry,style=null, attributes?) {
    this.id = ('vector_') + (_vectorId += 1);
    this.geometry = geometry;
    this.style = style;
    if(attributes){
      this.attributes = attributes;
    }
  }
}
export {
  Vector
}