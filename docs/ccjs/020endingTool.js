function confirmEnding(stringOne, stringTwo) {
  let lengthOne = stringOne.length;
  let lengthTwo = stringTwo.length;
  let startPoint = lengthOne - lengthTwo;
  let endOne = stringOne.slice(startPoint);
  if (endOne === stringTwo) {
    return true;
  } else {
    return false;
  }
}

console.log(confirmEnding("peanut", "nut"));
