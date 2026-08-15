function whatIsInAName(array, source) {
  let sharedKeys = Object.keys(source);

  const newArray = array.filter((obj) => {
    for (const key of sharedKeys) {
      if (!obj.hasOwnProperty(key) || obj[key] !== source[key]) {
        return false;
      }
    }
    return true;
  });
  return newArray;
}

console.log(
  whatIsInAName([{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }], {
    apple: 1,
    bat: 2,
  }),
);
