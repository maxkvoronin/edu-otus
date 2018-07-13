var promise0 = Promise.resolve(0),
  promise1 = Promise.resolve(1),
  promise2 = Promise.resolve(2)


promiseReduce([promise0, promise1, promise2], (a, b) => a + b, 0)
.then(res => console.log(res)) // 3

async function promiseReduce(arr, func, start) {
  let memo = 0;

  await new Promise ((res, rej) => {
    for (let i=0;i<arr.length;i++) {
      arr[i]
      .then(val => {
        memo = func(memo, val)
        if (i === arr.length-1)
          res(memo);
        }
      )
    }
  });

  return Promise.resolve(memo);
}