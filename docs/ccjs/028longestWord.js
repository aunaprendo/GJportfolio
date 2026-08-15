function findLongestWordLength(sentence) {
  let words = sentence.split(" ");
  let wordCount = words.length;

  for (let x = 0; x < wordCount; x++) {
    if (words[x].length > words[x++].length) {
      let biggestWord = words[x];
    }
  }
  return biggestWord;
}

console.log(findLongestWordLength("hi i love squirrels"));

function findLongestWord(sentence) {
  let words = sentence.split(" ");
  let biggestWord = "";

  for (let x = 0; x < words.length; x++) {
    if (words[x].length > biggestWord.length) {
      biggestWord = words[x];
    }
  }

  return biggestWord;
}

console.log(findLongestWord("hi i love squirrels"));

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
