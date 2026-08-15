function sumAll(array) {
  let max = Math.max(array[0], array[1]);
  let min = Math.min(array[0], array[1]);
  let sum = null;
  for (var i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumAll([4, 1]));
