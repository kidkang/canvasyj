export default function(geometry,style){
  const {pointRadius:radius} = style;
  const pt = this.getLocalXY(geometry);
  const twoPi = Math.PI*2;
  if(style.fill){
    this.setCanvasStyle('fill',style);
    this.context.beginPath();
    this.context.arc(pt.x,pt.y,radius,0,twoPi,true);
    this.context.fill();
  }
  if(style.stroke) {
    this.setCanvasStyle("stroke", style)
    this.context.beginPath();
    this.context.arc(pt.x, pt.y, radius, 0, twoPi, true);
    this.context.stroke();
  }
  this.setCanvasStyle("reset");
}