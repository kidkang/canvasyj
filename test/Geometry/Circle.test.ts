import {Circle} from '../../src/Geometry/Circle';
import {Point} from '../../src/Geometry/Point';

describe("CanvasYj.Circle",() => {
  it("construcotr",() => {
    const _c = new Circle(1,1,10);
    expect(_c).toBeInstanceOf(Point);
    expect(_c.x).toBe(1);
    expect(_c.y).toBe(1);
    expect(_c.radius).toBe(10);
  });
});