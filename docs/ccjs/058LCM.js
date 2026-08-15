const smallestCommons = (array) => {
  let min = Math.min(...array);
  let max = Math.max(...array);

  let span = [];
  for (let i = min; i <= max; i++) {
    span.push(i);
  }

  let lcm = max;
  while (span.every((num) => lcm % num === 0) === false) {
    lcm += max;
  }
  return lcm;
};

console.log(smallestCommons([1, 5]));
