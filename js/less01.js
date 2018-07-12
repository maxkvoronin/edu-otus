/*
  a == 1 && a == 2 && a == 3 === true;
*/
let a = {
  b: 1,
  valueOf: function() {
    return this.b++;
  } 
}

//console.log(a == 1 && a == 2 && a == 3);

/* реализовать функицю полифилл Array.prototype.reduce
  reduce (
    [1,2,3,4],
    (a, b) => a + b,
    0
  )
  10
*/
function reduce (arr, func, start) {
  let memo;

  for (let i=0;i<arr.length;i++) {
    if(i===0)
      memo = func(start, arr[i]);
    else 
      memo = func(memo, arr[i]);
  }
  return memo;
}

//console.log(reduce([1,2,3,4], (a,b)=>a+b, 0));


for (let i = 0; i<10; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}