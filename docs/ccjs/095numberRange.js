function rangeOfNumbers(startNum, endNum) {
  let countArray = [];

  if (endNum < startNum) {
    return [];
  } else {
    countArray = rangeOfNumbers(startNum, endNum - 1);
    countArray.push(endNum);
    return countArray;
  }
}
console.log(rangeOfNumbers(5, 5));
