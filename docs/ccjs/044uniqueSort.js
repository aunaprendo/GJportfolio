let array1 = [1, 2, 4];
let array2 = [2, 3, 5];

function uniteUnique(...b) {
  let arrayNew = [];
  for (var i = 0; i < b.length; i++) {
    for (var k = 0; k < b[i].length; k++) {
      if (!arrayNew.includes(b[i][k])) {
        arrayNew.push(b[i][k]);
      }
    }
  }
  return arrayNew;
}

console.log(uniteUnique(array1, array2));
