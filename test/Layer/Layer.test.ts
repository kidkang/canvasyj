import {Layer} from '../../src/Layer/Layer';
import {Point} from '../../src/Geometry/Point';
import {Vector} from '../../src/Vector/Vector';
import defaultStyle from '../../src/Util/Style';
// import {Canvas} from '../../src/Renderder/Canvas';
jest.mock('../../src/Renderder/Canvas');
const div = document.createElement('div');
const layer = new Layer(div);
describe("CanvasYj.Layer",()=>{
  it("addVectors",() => {
    const v = new Vector(new Point);
    layer.addVectors([v]);
    expect(layer.renderer.drawGeometry).toHaveBeenCalled();
    expect(layer.vectorsCount).toBe(1);
    expect(layer.vectors).toEqual({
      [v.id]:v
    });
    expect(layer.renderer.drawGeometry).toHaveBeenCalledWith(v.geometry,defaultStyle);
  });
  
})