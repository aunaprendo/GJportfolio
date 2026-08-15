const array1 = ["claw", "tentacle"];
const array2 = ["head", "shoulders", "knees", "toes"];
let i = 2;

function frankenSplice(array1, array2, i) {
  let array2Copy = array2.slice();
  let array1Copy = array1.slice();
  for (let a of array1Copy.reverse()) {
    let b = a;
    array2Copy.splice(i, 0, b);
  }

  return array2Copy;
}

console.log(frankenSplice(array1, array2, i));
console.log("test");
console.log(array2);
