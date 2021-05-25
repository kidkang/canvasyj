import {
  Geometry
} from '../Geometry/Geometry';
let _vectorId = 0;
class Vector {
  id: string;
  attributes?;
  geometry:Geometry;
  constructor(geometry: Geometry, attributes?) {
    this.id = ('vector_') + (_vectorId += 1);
    this.geometry = geometry;
    if(attributes){
      this.attributes = attributes;
    }
  }
}
export {
  Vector
}