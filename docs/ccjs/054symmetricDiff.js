const diffArray = (arrayA, arrayB) => {
  let newArray = [
    ...arrayA.filter((word) => !arrayB.includes(word)),
    ...arrayB.filter((word) => !arrayA.includes(word)),
  ];
  return newArray;
};

console.log(
  diffArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"],
  ),
);
