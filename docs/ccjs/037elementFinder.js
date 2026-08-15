function findElement(array, func) {
  for (let i of array) {
    if (func(i) == true) {
      return i;
    }
  }
  return undefined;
}
