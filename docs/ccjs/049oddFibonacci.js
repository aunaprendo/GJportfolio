function sumFibs(num) {
  let numbers = [0, 1];
  let sum = 0;

  for (let i = 0; ; i++) {
    let current = numbers[i] + numbers[i + 1];

    if (current > num) break;

    numbers.push(current);

    if (current % 2 !== 0) {
      sum += current;
    }
  }

  return sum + 1;
}

console.log(sumFibs(1000));
