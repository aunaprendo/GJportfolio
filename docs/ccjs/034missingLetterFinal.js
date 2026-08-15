function fearNotLetter(abcs) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  abcs = abcs.toLowerCase();

  let first = alphabet.indexOf(abcs[0]);
  let last = alphabet.indexOf(abcs[abcs.length - 1]);

  let segment = alphabet.slice(first, last + 1);

  for (let letter of segment) {
    if (!abcs.includes(letter)) {
      return letter;
    }
  }

  return undefined;
}

console.log(fearNotLetter("bcdf"));
