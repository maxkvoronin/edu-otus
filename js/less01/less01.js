//1

let a = {
  b: 1,
  valueOf: function() {
    return this.b++;
  } 
}
//console.log(a == 1 && a == 2 && a == 3);


//2

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

//3

for (let i = 0; i < 10; i++) {
    setTimeout( function() {
      console.log(i);
    }, 1000);
}

for (var i = 0; i < 10; i++) {
  setTimeout( function(i) {
    console.log(i);
  }.bind(null, i), 1000);
}

for (var i = 0; i < 10; i++) {
  (function (i) {
    setTimeout( function() {
      console.log(i);
    }, 1000);
  })(i)
}

// 4

function sum(arg) {
  let summ = 0;
  return function inner(elem) {
    if (elem === undefined)
      return summ;
    else
      summ+=elem;
  }
}
let summ = sum();

// 5 

function Create (obj) {
  this.__proto__ = obj;
}

let test = new Create({c:1});
console.log(test.__proto__);