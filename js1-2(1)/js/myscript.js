function pow(a, z) {
  var result = a;
  if ( (a == 0) && (z <= 0) ) {
  console.log('is not defined');
  } else {
  if (z == 0) {
    console.log(1);
  } else {
    for (var i = 1; i < Math.abs(z); i++) {
      result *= a;
    }
    if (z  > 0) {
        console.log(result);
    }
    if (z  < 0) {
    console.log(1 / result);
    }
    }
  }
}
var n = prompt ('enter number');
var exp = prompt ('enter exp');
pow(n, exp);
