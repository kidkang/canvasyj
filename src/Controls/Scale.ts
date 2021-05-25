import {
  Layer
} from '../Layer/Layer';
import {
  bindAsEventListener,
  stopEventBubble
} from '../Util/Util';
class Scale {
  layer = null;
  div: HTMLDivElement;
  events = [
    ['mousewheel', this.wheelChange],
    ['DOMMouseScroll',this.DOMScroll]
  ];
  constructor(layer: Layer) {
    this.layer = layer;
    this.div = layer.div;
    this.active();
  }
  wheelChange(e) {
    const layer = this.layer;
    const delta = (e.wheelDelta / 120) * 30;
    const deltalX = layer.size.w/2 - (e.offsetX || e.layerX);
    const deltalY = (e.offsetY || e.layerY) - layer.size.h/2;
    const px = {x: (e.offsetX || e.layerX), y:(e.offsetY || e.layerY)};
    const zoomPoint = layer.getPositionFromPx(px);
    const zoom = this.layer.zoom + delta;
    var newRes = this.layer.getResFromZoom(zoom);
    const x = zoomPoint.x + deltalX * newRes;
    const y = zoomPoint.y + deltalY * newRes;
    this.layer.moveTo(zoom,{x,y});
    stopEventBubble(e);
  }
  DOMScroll(e){
    stopEventBubble(e);
  }
  active() {
    for (let i = 0, len = this.events.length; i < len; i++) {
      const type = this.events[i][0] as string;
      const listener = bindAsEventListener(this.events[i][1], this);
      this.div.addEventListener(type, listener, false);
    }
  }
}
export {
  Scale
}