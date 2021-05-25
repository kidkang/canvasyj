export default function(geometry, style) {
  const {
    radius
  } = geometry;
  const twoPi = Math.PI * 2;
  const pt = this.getLocalXY(geometry);
  //填充
  if (style.fill) {
    this.setCanvasStyle("fill", style)
    this.context.beginPath();
    this.context.arc(pt.x, pt.y, radius / this.layer.res, 0, twoPi, true);
    this.context.fill();
  }
  //描边
  if (style.stroke) {
    this.setCanvasStyle("stroke", style)
    this.context.beginPath();
    this.context.arc(pt.x, pt.y, radius / this.layer.res, 0, twoPi, true);
    this.context.stroke();
  }
  this.setCanvasStyle("reset");
}