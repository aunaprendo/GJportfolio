function getVowelCount(sentence) {
  let lowercaseSentence = sentence.toLowerCase();
  let letters = lowercaseSentence.split("");
  let vowels = [];
  for (let abc of letters) {
    if (abc === "a" || abc === "e" || abc === "i" || abc === "o" || abc === "u") {
      vowels.push(abc);
    }
  }
  return vowels.length;
}
console.log(getVowelCount("i love squirrels"));

//fcc version
function getVowelCount(sentence) {
  const vowels = "aeiou";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

//step two
function getConsonantCount(sentence) {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (consonants.includes(char)) {
      count++;
    }
  }
  return count;
}

//step three
function getPunctuationCount(sentence) {
  const notPunctuation = "abcdefghijklmnopqrstuvwxyz ";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (!notPunctuation.includes(char)) {
      count++;
    }
  }
  return count;
}

function getWordCount(sentence) {
  let words = sentence.split(" ");
  let count = 0;

  for (let word of words) {
    if (word !== "") {
      count++;
    }
  }
  return count;
}
console.log(getWordCount("   "));

function getWordCount(sentence) {
  let words = sentence.split(" ");
  let count = 0;

  for (let word of words) {
    if (word !== "") {
      count++;
    }
  }
  return count;
}

console.log(getWordCount("   "));
console.log(getWordCount("i love squirrels"));

function getWordCount(sentence) {
  let lowercaseSentence = sentence.toLowerCase();
  let words = lowercaseSentence.split(" ");
  let wordArray = [];
  for (let word of words) {
    if (!word.includes(" ")) {
      wordArray.push(word);
    }
  }
  return wordArray.length;
}
console.log(getWordCount("   "));
