// Problem #1

function multi(x) {
  var sum =0;
    for (var i = 0; i < x; i++){
      if (i % 3 === 0) {
        sum += i;
      }
      if (i % 5 === 0) {
        sum += i;
      }
    }
    return sum;
};

console.log(multi(1000));
//output = 266333

