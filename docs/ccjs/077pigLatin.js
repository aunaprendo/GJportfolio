function translatePigLatin(string) {
	const frontVowels = /^[aeiou]+/i;
	const anyVowels = /[aeiou]+/i;
	if (string.match(frontVowels)) {
		return `${string}way`;
	} else if (!string.match(anyVowels)) {
		return `${string}ay`;
	}
	const frontConsonants = /^[bcdfghjklmnpqrstvwxyz]+(?=[aeiou])/i;
	const [, stringCapture] = string.match(/^([bcdfghjklmnpqrstvwxyz]+)(?=[aeiou])/i);
	let pigLatin = `${string.replace(frontConsonants, "")}${stringCapture}ay`;
	return pigLatin;
}

console.log(translatePigLatin("glove"));



function translatePigLatin(str) {
  if (/^[aeiou]/i.test(str)) return `${str}way`;
  if (!/[aeiou]/i.test(str)) return `${str}ay`;

  return str.replace(/^([^aeiou]+)(.*)/i, "$2$1ay");
}

console.log(translatePigLatin("glove"));



function translatePigLatin(str) {
  return str.replace(/^([aeiou]\w*)|(^[^aeiou]+)(\w*)/i,
    (_, vowelWord, consonants, rest) =>
      vowelWord ? `${vowelWord}way` : `${rest}${consonants}ay`
  );
}

console.log(translatePigLatin("glove")); 