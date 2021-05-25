export default function(geometry, style) {
  if (style.stroke) {
    this.setCanvasStyle("stroke", style);
    this.rendererPath(geometry, {
      fill: false,
      stroke: true
    });
  }
  if (style.fill) {
    this.setCanvasStyle("fill", style);
    this.rendererPath(geometry, {
      fill: true,
      stroke: true
    });
  }
  this.setCanvasStyle("reset");
}