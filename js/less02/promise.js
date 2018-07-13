let b = new Promise((resolve, reject) => 
  setTimeout(() => 
    resolve('hello1'), 2000)
);

let c = new Promise((resolve, reject) => 
  setTimeout(() => 
    resolve('hello2'), 5000)
);
//Promise.all([b,c]).then((msg) => console.log(msg));

async function print () {
  console.log('1');
  const res = await b;
  console.log(res);
}
async function print2 () {
  console.log('2');
  const res = await c;
  console.log(res);
}

print();
print2();

