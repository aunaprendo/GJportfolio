function findLongestWordLength(sentence) {
  let words = sentence.split(" ");
  let longest = 0;

  for (let x = 0; x < words.length; x++) {
    if (words[x].length > longest) {
      longest = words[x].length;
    }
  }

  return longest;
}

console.log(findLongestWordLength("hi i love squirrels"));
