function reverseString(string) {
  let reverse = string.split("").reverse().join("");
  return reverse;
}

console.log(reverseString("squirrel"));
