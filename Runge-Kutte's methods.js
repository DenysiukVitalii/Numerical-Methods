'use strict';

let myFunc = (x, y) => x*y / (1 + x*x),
    checkFunc = (x, y) => Math.sqrt(1 + x*x);

let a = 0, b = 6, h = 0.6, h1 = h/5, h3 = h/25, n = Math.round((b - a) / h);
let X = new Array(n), Y = new Array(n);

let RungeKutte3 = (a, b, h, X, Y, n) => {
  let k1, k2, k3;
  X[0] = a; Y[0] = 1;

  for (let i=1; i<=n; i++) {
    X[i] = a + i*h;

    k1 = h*myFunc(X[i-1], Y[i-1]);
    k2 = h*myFunc(X[i-1] + h/3, Y[i-1] + k1/3);
    k3 = h*myFunc(X[i-1] + h*2/3,Y[i-1] + k2*2/3);

    Y[i] = Y[i-1] + 1/4*(k1 + 3*k3);
  }

  console.log("\n    Xk       Y(Xk)      Yk        e       100e/Yk\n ________________________________________________\n" );
  for (let i = 0; i < n; i++)
    console.log(" " + X[i].toFixed(6) + "  " + checkFunc(X[i]).toFixed(6) + "  " + Y[i].toFixed(6) + "  " +
                Math.abs(checkFunc(X[i]) - Y[i]).toFixed(6) + "  " + (100*(Math.abs(checkFunc(X[i]) - Y[i]))/Y[i]).toFixed(6));
}

RungeKutte3(a,b,h,X,Y,n);
