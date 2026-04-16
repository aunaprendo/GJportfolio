function binarySearch(searchList, value) {
  let pathToTarget = [];
  let low = 0;
  let high = searchList.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let valueAtMiddle = searchList[mid];
    pathToTarget.push(valueAtMiddle);

    if (value === valueAtMiddle) {
      return [pathToTarget, `Value found at index ${mid}`];

    } else if (value > valueAtMiddle) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return [[], "Value not found"];

}

console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(binarySearch([1, 2, 3, 4, 5, 9], 4));
console.log(binarySearch([1, 3, 5, 9, 14, 22], 10));