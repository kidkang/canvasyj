import {Vector} from '../src/Vector/Vector';
import {Point} from '../src/Geometry/Point';
const _p = new Point(0,0);
const _v = new Vector(_p);
describe("CanvasYj.Vector",() => {
  it("constructor",() => {
    expect(_v).toEqual({
      id:'vector_1',
      geometry:_p,
      attributes:undefined
    });

  })
});