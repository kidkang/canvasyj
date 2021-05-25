class Vector2 {
  x: number;
  y: number;
  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }
  get width(): number {
    return this.x;
  }
  set width(value: number) {
    this.x = value;
  }
  get height(): number {
    return this.y;
  }
  set height(value: number) {
    this.y = value;
  }
  set(x: number, y: number): Vector2 {
    this.x = x;
    this.y = y;
    return this;
  }
  setScalar(scalar: number) {
    this.x = scalar;
    this.y = scalar;
    return this;
  }
  setX(x: number): Vector2 {
    this.x = x;
    return this;
  }
  setY(y: number): Vector2 {
    this.y = y;
    return this;
  }
  clone(): Vector2 {
    return new Vector2(this.x, this.y);
  }
  copy(v): Vector2 {
    this.x = v.x;
    this.y = v.y;
    return this;
  }
  add(v): Vector2 {
    this.x += v.x;
    this.y += v.y;
    return this;
  }
  addVectors(a,b){
    this.x = a.x + b.x;
    this.y = a.y + b.y;
    return this;
  }
  multiplyScalar(scalar: number) {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  }
  divideScalar(scalar) {
    return this.multiplyScalar(1 / scalar);
  }
  dot(v): number {
    return this.x * v.x + this.y * v.y;
  }
  length(): number {
    return Math.sqrt(this.lengthSq());
  }
  lengthSq():number{
    return this.x * this.x + this.y * this.y;
  }
  min(v){
    this.x = Math.min(this.x,v.x);
    this.y = Math.min(this.y,v.y);
    return this;
  }
  max(v){
    this.x = Math.max(this.x,v.x);
    this.y = Math.max(this.y,v.y);
    return this;
  }
  equals(v): boolean {
    return ((v.x === this.x) && (v.y === this.y));
  }
  normalize(){
    return this.divideScalar(this.length() || 1);
  }
  projectOnVector(v){
    const scalar = v.dot( this ) / v.lengthSq();
    return this.copy( v ).multiplyScalar( scalar );
  }
}
export {
  Vector2
}