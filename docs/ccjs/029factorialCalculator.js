let num = 5;

function factorialCalculator(number) {
  let max = number + 1;
  let result = 1;
  for (var i = 1; i < max; i++) {
    result = result * i;
  }
  return result;
}

let factorial = factorialCalculator(num);
let resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);

//cleaner version
let num = 5;

function factorialCalculator(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
}

console.log(`Factorial of ${num} is ${factorialCalculator(num)}`);
