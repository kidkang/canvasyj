import {Bounds} from '../src/Util/Bounds';
const b = new Bounds(-400,-200,400,200);
describe("CanvasYj.Bounds",()=>{
  it('constructor',() => {
    expect(b).toEqual({
      left:-400,
      bottom:-200,
      right:400,
      top:200
    });
  });

  it("clone",() => {
    const _b = b.clone();
    expect(_b).not.toBe(b);
    expect(_b).toBeInstanceOf(Bounds);
    expect(_b).toEqual(b);
  });

  it("getCenter",() => {
    expect(b.getCenter()).toEqual({x:0,y:0});
  })
});