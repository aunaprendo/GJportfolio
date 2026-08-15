const numbers = [
  [1, 2, 3],
  [4, 5, 6, 8],
  [7, 8, 9],
  [10, 20, 30, 99],
];

function largestOfAll(array) {
  let maxes = [];
  for (let i of array) {
    let max = Math.max(...i);
    maxes.push(max);
  }
  return maxes;
}

console.log(largestOfAll(numbers));
