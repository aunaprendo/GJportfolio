function titleCase(string) {
  let words = string.split(" ");
  let wordCount = words.length;
  let wordEnd = [];
  let wordComplete = [];
  let sentence = "";
  for (let i = 0; i < wordCount; i++) {
    wordEnd.push(words[i].slice(1).toLowerCase());
  }
  for (let i = 0; i < wordCount; i++) {
    words[i] = words[i][0].toUpperCase();
  }
  for (let i = 0; i < wordCount; i++) {
    wordComplete.push(words[i] + wordEnd[i]);
  }
  for (let i = 0; i < wordCount - 1; i++) {
    sentence = sentence.concat(wordComplete[i] + " ");
  }
  return sentence + wordComplete[wordCount - 1];
}

console.log(titleCase("i love fluffy cute brown squirrels"));
