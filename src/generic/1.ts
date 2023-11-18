/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/
let arr: Array<string | number> = [];

function getPromise() {
  return new Promise((resolve) => {
    resolve(arr);
  });
}

getPromise().then((data) => {
  console.log(data);
});

export {};
