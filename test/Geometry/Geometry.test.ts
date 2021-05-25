import {Geometry} from '../../src/Geometry/Geometry';
const _g = new Geometry();
describe("CanvasYj.Geometry",()=>{
  it("constructor",()=>{
    expect(_g.id).toBe(1);
    expect(new Geometry().id).toBe(2);
    expect(new Geometry().id).toBe(3);
  });

  it("clone",()=>{
    const _gc = _g.clone();
    expect(_gc).not.toBe(_g);
    expect(_gc).toBeInstanceOf(Geometry);
    expect(_gc.id).not.toBe(_g.id);
  });
});