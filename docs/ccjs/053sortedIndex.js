function getIndexToIns(array, numb) {
  let sorted = array.sort((a, b) => a - b);
  let index = sorted.findIndex((num) => num >= numb);
  return index === -1 ? sorted.length : index;
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
