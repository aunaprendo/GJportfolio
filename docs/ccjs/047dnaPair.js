function pairElement(string) {
  let pairs = [];
  let letters = string.split("");
  for (var i = 0; i < letters.length; i++) {
    if (letters[i] === "A") {
      pairs.push([letters[i], "T"]);
    } else if (letters[i] === "T") {
      pairs.push([letters[i], "A"]);
    } else if (letters[i] === "C") {
      pairs.push([letters[i], "G"]);
    } else if (letters[i] === "G") {
      pairs.push([letters[i], "C"]);
    }
  }
  return pairs;
}

console.log(pairElement("ATCGA"));
