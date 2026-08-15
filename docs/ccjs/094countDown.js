function countdown(n) {
  let count = [];

  if (n < 1) {
    return [];
  } else {
    count.push(n);
    count = count.concat(countdown(n - 1));
  }
  return count;
}

console.log(countdown(5));
