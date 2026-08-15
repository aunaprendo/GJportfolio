function primeTest(num) {
  if (num <= 1) return false;
  if (num === 2) return true;

  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function sumPrimes(num) {
  let primes = [];

  if (num < 2) {
    return 0;
  }

  for (let i = 0; i <= num; i++) {
    if (primeTest(i) === true) {
      primes.push(i);
    }
  }
  return primes.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
console.log(sumPrimes(10));
