export default function(geometry,style){
  this.setCanvasStyle("stroke", style);
    this.rendererPath(geometry, {fill: false, stroke: true});
    this.setCanvasStyle("reset");
}