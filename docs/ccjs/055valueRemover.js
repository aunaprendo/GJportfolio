function destroyer(array, ...args) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (!args.includes(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

console.log(destroyer(["tree", "hamburger", 7, 53], "tree", 53));

function destroyer(array, ...args) {
  return array.filter((item) => !args.includes(item));
}
