function myReplace(string, wordremove, wordReplace) {
  const upperCase = /^([A-Z])/;
  const lowerCase = /^([a-z])/;

  if (
    (upperCase.test(wordremove[0]) && upperCase.test(wordReplace[0])) ||
    (lowerCase.test(wordremove[0]) && lowerCase.test(wordReplace[0]))
  ) {
    let updatedString = string.replace(wordremove, wordReplace);
    return updatedString;
  } else {
    let correctedReplace = wordReplace.replace(
      /(^[a-z])(\w*)|(^[A-Z])(\w*)/,
      (_, firstLower, restLower, firstUpper, restUpper) =>
        firstLower
          ? `${firstLower.toUpperCase()}${restLower}`
          : `${firstUpper.toLowerCase()}${restUpper}`,
    );
    let updatedString = string.replace(wordremove, correctedReplace);
    return updatedString;
  }
}

console.log(myReplace("This has a Spellngi error", "Spellngi", "spelling"));

function myReplace(string, wordremove, wordReplace) {
  if (wordremove[0] === wordremove[0].toUpperCase()) {
    wordReplace = wordReplace[0].toUpperCase() + wordReplace.slice(1);
    return string.replace(wordremove, wordReplace);
  }
  wordReplace = wordReplace[0].toLowerCase() + wordReplace.slice(1);
  return string.replace(wordremove, wordReplace);
}

console.log(myReplace("This has a Spellngi error", "Spellngi", "spelling"));
