const steamrollArray = (array) => {
  let y = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i].length === 0) {
      array.splice(i, 1);
    }
    while (array[i].length >= 1 && typeof array[i] === "object") {
      array.splice(i, 1, ...array[i]);
    }
  }
  return array;
};

console.log(steamrollArray([1, [], [3, [[4]]]]));
