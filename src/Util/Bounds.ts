class Bounds{
  left:number;
  right:number;
  bottom:number;
  top:number;
  constructor(x1,y1,x2,y2){
    this.left = x1;
    this.right = x2;
    this.bottom = y1;
    this.top = y2;
  }
  getCenter(){
    const w = this.right - this.left;
    const h = this.top - this.bottom;
    const x = this.left + w / 2 , y = this.bottom + h /2;
    return {x,y};
  }
  clone(){
    return new Bounds(this.left,this.bottom,this.right,this.top);
  }
}
export{
  Bounds
}