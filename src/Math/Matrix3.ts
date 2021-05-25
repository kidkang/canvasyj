class Matrix3{
  elements = [];
  constructor(){
    this.elements = [
      1,0,0,
      0,1,0,
      0,0,1
    ];
  }
  set(n11, n12, n13, n21, n22, n23, n31, n32, n33) {
    const te = this.elements;
    te[0] = n11;te[1] = n21;te[2] = n31;
    te[3] = n12;te[4] = n22;te[5] = n32;
    te[6] = n13;te[7] = n23;te[8] = n33;
    return this;
  }
  identity(){
    this.set(
      1,0,0,
      0,1,0,
      0,0,1
    );
    return this;
  }
  clone(){
    return new Matrix3().fromArray(this.elements);
  }
  copy(m){
    const te = this.elements;
    const me = m.elements;
    te[ 0 ] = me[ 0 ]; te[ 1 ] = me[ 1 ]; te[ 2 ] = me[ 2 ];
    te[ 3 ] = me[ 3 ]; te[ 4 ] = me[ 4 ]; te[ 5 ] = me[ 5 ];
    te[ 6 ] = me[ 6 ]; te[ 7 ] = me[ 7 ]; te[ 8 ] = me[ 8 ];

    return this;
  }
  multiply( m ) {
    return this.multiplyMatrices( this, m );
  }
  premultiply(m) {
    return this.multiplyMatrices( m, this );
  }
  multiplyMatrices( a, b ) {

    const ae = a.elements;
    const be = b.elements;
    const te = this.elements;

    const a11 = ae[ 0 ], a12 = ae[ 3 ], a13 = ae[ 6 ];
    const a21 = ae[ 1 ], a22 = ae[ 4 ], a23 = ae[ 7 ];
    const a31 = ae[ 2 ], a32 = ae[ 5 ], a33 = ae[ 8 ];

    const b11 = be[ 0 ], b12 = be[ 3 ], b13 = be[ 6 ];
    const b21 = be[ 1 ], b22 = be[ 4 ], b23 = be[ 7 ];
    const b31 = be[ 2 ], b32 = be[ 5 ], b33 = be[ 8 ];

    te[ 0 ] = a11 * b11 + a12 * b21 + a13 * b31;
    te[ 3 ] = a11 * b12 + a12 * b22 + a13 * b32;
    te[ 6 ] = a11 * b13 + a12 * b23 + a13 * b33;

    te[ 1 ] = a21 * b11 + a22 * b21 + a23 * b31;
    te[ 4 ] = a21 * b12 + a22 * b22 + a23 * b32;
    te[ 7 ] = a21 * b13 + a22 * b23 + a23 * b33;

    te[ 2 ] = a31 * b11 + a32 * b21 + a33 * b31;
    te[ 5 ] = a31 * b12 + a32 * b22 + a33 * b32;
    te[ 8 ] = a31 * b13 + a32 * b23 + a33 * b33;

    return this;

  }
  multiplyScalar(s){
    const te = this.elements;
    te[ 0 ] *= s; te[ 3 ] *= s; te[ 6 ] *= s;
    te[ 1 ] *= s; te[ 4 ] *= s; te[ 7 ] *= s;
    te[ 2 ] *= s; te[ 5 ] *= s; te[ 8 ] *= s;
    return this;
  }
  determinant() {
    const te = this.elements;
    const a = te[ 0 ], b = te[ 1 ], c = te[ 2 ],
      d = te[ 3 ], e = te[ 4 ], f = te[ 5 ],
      g = te[ 6 ], h = te[ 7 ], i = te[ 8 ];
    return a * e * i - a * f * h - b * d * i + b * f * g + c * d * h - c * e * g;
  }
  getInverse( matrix, throwOnDegenerate=false ) {
    const me = matrix.elements,
      te = this.elements,

      n11 = me[ 0 ], n21 = me[ 1 ], n31 = me[ 2 ],
      n12 = me[ 3 ], n22 = me[ 4 ], n32 = me[ 5 ],
      n13 = me[ 6 ], n23 = me[ 7 ], n33 = me[ 8 ],

      t11 = n33 * n22 - n32 * n23,
      t12 = n32 * n13 - n33 * n12,
      t13 = n23 * n12 - n22 * n13,

      det = n11 * t11 + n21 * t12 + n31 * t13;
    if ( det === 0 ) {

      const msg = "THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0";

      if ( throwOnDegenerate === true ) {

        throw new Error( msg );

      } else {

        console.warn( msg );

      }

      return this.identity();

    }

    const detInv = 1 / det;

    te[ 0 ] = t11 * detInv;
    te[ 1 ] = ( n31 * n23 - n33 * n21 ) * detInv;
    te[ 2 ] = ( n32 * n21 - n31 * n22 ) * detInv;

    te[ 3 ] = t12 * detInv;
    te[ 4 ] = ( n33 * n11 - n31 * n13 ) * detInv;
    te[ 5 ] = ( n31 * n12 - n32 * n11 ) * detInv;

    te[ 6 ] = t13 * detInv;
    te[ 7 ] = ( n21 * n13 - n23 * n11 ) * detInv;
    te[ 8 ] = ( n22 * n11 - n21 * n12 ) * detInv;
    return this;

  }
  equals(matrix){
    const te = this.elements;
    const me = matrix.elements;
    for ( var i = 0; i < 9; i ++ ) {
      if ( te[ i ] !== me[ i ] ) return false;
    }
    return true;
  }
  fromArray(array,offset =0){
    for ( var i = 0; i < 9; i ++ ) {
      this.elements[ i ] = array[ i + offset ];
    }
    return this;
  }
  toArray(array = [],offset =0){
    const te = this.elements;

    array[ offset ] = te[ 0 ];
    array[ offset + 1 ] = te[ 1 ];
    array[ offset + 2 ] = te[ 2 ];

    array[ offset + 3 ] = te[ 3 ];
    array[ offset + 4 ] = te[ 4 ];
    array[ offset + 5 ] = te[ 5 ];

    array[ offset + 6 ] = te[ 6 ];
    array[ offset + 7 ] = te[ 7 ];
    array[ offset + 8 ] = te[ 8 ];

    return array;
  }
  toString(){
    const te  = this.elements;
    let txt = "[\n";
    for(let j = 0;j<3;j++){
      txt += '  ';
      for(let i = 0,len = te.length;i<len;i+=3){
        const t = i + j;
        txt += te[i+j];
        if(t !== len - 1){
          txt += ',';
        }
      }
      txt += "\r\n";
    }
    txt +="]";
    return txt;
  }
}

export {
  Matrix3
}