1. Написать функцию getPath, находяющую уникальный css-селектор для элемента в документе
```js
getPath(node) // => "div>div:nth-child(2)>span"
```
2. Написать функцию promiseReduce
Создать функцию promiseReduce для асинхронных функций. Она принимает массив promise-ов в качестве аргументов и возвращает promise. Функция дожидается исполнения всех переданных promise-ов поочередно, ожидая их завершения. В результате выполняется reduce-функция для каждого итогового значения.
Проще говоря, promiseReduce выполняет тоже самое, что и Array.prototype.reduce. Разница в том, что reduce работает с массивом значений, а promiseReduce с массивом promise-ов.

```js
var promise0 = Promise.resolve(0),
promise1 = Promise.resolve(1),
promise2 = Promise.resolve(2)

promiseReduce([promise0, promise1, promise2],(a, b) => a + b,0)
.then(res => console.log(res)) // 3
```





3. Написать функцию intersect
Написать функцию, которая определяет, пересекаются ли два элемента на странице
intersect(node1, node2)
