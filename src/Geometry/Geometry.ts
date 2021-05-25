let _geometryId = 0;
class Geometry {
  bounds: null;
  id:string;
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