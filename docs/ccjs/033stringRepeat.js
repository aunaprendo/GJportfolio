function repeatStringNumTimes(string, number) {
  let singleString = string;
  if (number <= 0) {
    return "";
  } else {
    for (var i = 1; i < number; i++) {
      string = string + singleString;
    }
  }
  return string;
}
console.log(repeatStringNumTimes("i love squirrels ", 2));
