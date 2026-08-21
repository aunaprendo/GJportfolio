function dropElements(arr, func) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) === true) {
      newArr = arr.splice(i);
    }
  }
  return newArr;
}

console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n >= 3;
  }),
);
