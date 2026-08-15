let squirrels = ["squirRels", "sure"];

function mutation(array) {
  let wordOne = array[0].toLowerCase();
  let wordTwo = array[1].toLowerCase();

  for (const char of wordTwo) {
    if (!wordOne.includes(char)) {
      return false;
    }
  }

  return true;
}

console.log(mutation(squirrels));
