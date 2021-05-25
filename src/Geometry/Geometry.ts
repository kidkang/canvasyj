import {Bounds} from '../Util/Bounds';
let _geometryId = 0;
class Geometry {
  bounds:Bounds= null;
  id:string;
  geoType:string;
  constructor() {
    this.id = ('geo_')+(_geometryId += 1);
  }
  clone(){
    return new Geometry();
  }
}
export {
  Geometry
};