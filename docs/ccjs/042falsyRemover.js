let squirrels = [7, "nuts", "", false, 9];

console.log(Boolean(squirrels[2]));

function bouncer(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Boolean(array[i]) === true) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

console.log(bouncer(squirrels));
