'use strict';
let myFunc = (x, y) => x*y / (1 + x*x),
    checkFunc = (x, y) => Math.sqrt(1 + x*x);

let a = 0, b = 6, h = 0.6, h1 = h/5, h3 = h/25, n = Math.round((b - a) / h);
let X = new Array(n), Y = new Array(n);

let output = () => {
  console.log("\n    Xk       Y(Xk)      Yk        e       100e/Yk\n ________________________________________________\n" );
  for (let i = 0; i < n; i++)
    console.log(" " + X[i].toFixed(6) + "  " + checkFunc(X[i]).toFixed(6) + "  " + Y[i].toFixed(6) + "  " +
                Math.abs(checkFunc(X[i]) - Y[i]).toFixed(6) + "  " + (100*(Math.abs(checkFunc(X[i]) - Y[i]))/Y[i]).toFixed(6));
}

let RungeKutte3 = (a, b, h, X, Y, n) => {
  let k1, k2, k3;
  X[0] = a; Y[0] = 1;

  for (let i = 0; i < n; i++) {
    X[i + 1] = a + (i + 1)*h;

    k1 = h*myFunc(X[i], Y[i]);
    k2 = h*myFunc(X[i] + h/3, Y[i] + k1/3);
    k3 = h*myFunc(X[i] + h*2/3,Y[i] + k2*2/3);

    Y[i + 1] = Y[i] + 1/4*(k1 + 3*k3);
  }

  output();
}

let RungeKutte4 = (a, b, h, X, Y, n) => {
  let k1, k2, k3, k4;
  X[0] = a; Y[0] = 1;

  for (let i = 0; i < n; i++) {
    X[i + 1] = a + (i + 1)*h;

    k1 = h*myFunc(X[i], Y[i]);
  	k2 = h*myFunc(X[i] + h/2,Y[i] + k1/2);
  	k3 = h*myFunc(X[i] + h/2,Y[i] + k2/2);
  	k4 = h*myFunc(X[i] + h,Y[i] + k3);

  	Y[i + 1] = Y[i] + 1/6*(k1 + 2*k2 + 2*k3 + k4);
  }

  output();
}

RungeKutte3(a,b,h,X,Y,n);
RungeKutte4(a,b,h,X,Y,n);
