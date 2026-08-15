function truncateString(words, numb) {
  if (typeof words !== "string") {
    throw new Error("Argument must be a string");
  }
  if (typeof numb !== "number") {
    throw new Error("Argument must be a number");
  }
  let long = words.length;
  if (long > numb) {
    let wordsCut = words.slice(0, numb) + "...";
    return wordsCut;
  } else {
    return words;
  }
}
console.log(truncateString("squirrel", 5));
