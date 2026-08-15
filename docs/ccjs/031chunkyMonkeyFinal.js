function chunkArrayInGroups(array, num) {
  let subArray = [];

  while (array.length > 0) {
    subArray.push(array.splice(0, num));
  }
  return subArray;
}

let food = ["pecans", "acorns", "peanuts", "mushrooms", "seeds", "walnuts", "almonds"];
console.log(chunkArrayInGroups(food, 2));
