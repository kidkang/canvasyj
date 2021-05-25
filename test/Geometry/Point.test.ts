import {Point} from '../../src/Geometry/Point';
const _p = new Point;
describe("CanvasYj.Point",() => {
  it('constructor',() => {
    expect(_p.x).toBe(0);
    expect(_p.y).toBe(0);
  });
});