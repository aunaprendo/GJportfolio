function addTogether(a, b) {
  if (typeof a !== "number") return undefined;

  if (arguments.length === 2) {
    if (typeof b !== "number") return undefined;
    return a + b;
  }

  return function (b) {
    if (typeof b !== "number") return undefined;
    return a + b;
  };
}

console.log(addTogether(5));
