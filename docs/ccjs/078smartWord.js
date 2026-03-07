function myReplace(string, wordremove, wordReplace) {
 const upperCase = /^[A-Z]/;
 const lowerCase = /^[a-z]/;
 
 if (
 (wordremove[0]===upperCase && wordReplace[0]===upperCase) |
 (wordremove[0]===lowerCase && wordReplace[0]===lowerCase)
 ){
	 let updatedString = string.replace(wordremove, wordReplace);
	 return updatedString;
 } else {
 	return "no";
 };
};

console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));
 
 
 
 wordReplace.replace((/^([aeiou]\w*)|(^[^aeiou]+)(\w*)/i,
    (_, vowelWord, consonants, rest) =>
      vowelWord ? `${vowelWord}way` : `${rest}${consonants}ay`
  );
 
 
 if (wordremove[0]===upperCase && wordReplace[0]===lowerCase &&) {
 	wordReplaceCase = 
 }
 updatedString = string.replace(wordremove, wordReplace)
 return updatedString;





function translatePigLatin(str) {
  return str.replace(/^([aeiou]\w*)|(^[^aeiou]+)(\w*)/i,
    (_, vowelWord, consonants, rest) =>
      vowelWord ? `${vowelWord}way` : `${rest}${consonants}ay`
  );
}

console.log(translatePigLatin("glove")); 