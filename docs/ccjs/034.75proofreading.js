function isPalindrome(word) {
	const cleanMessage = word
    .replace(/[^a-z0-9]/ig, "")
    .toLowerCase();

  const reverseMessage = cleanMessage
    .split("")
    .reverse()
    .join("");

  return reverseMessage === cleanMessage 
}
 console.log(isPalindrome("cat"))
 
function findPalindromeBreaks(array) {
    let cleanArray = [];

    if (array.length === 0) {
        return [];
    }
	
    for (let i = 0; i < array.length; i++) {
        if (!isPalindrome(array[i])) {
            cleanArray.push(i);
        }
    }
    return cleanArray;
}

function findRepeatedPhrases(words, phraseLength) {
    if (phraseLength >= words.length) {
        return [];
    }	
    let repeatedIndices = new Set();

    for (let i = 0; i <= words.length - phraseLength; i++) {
        let phrase = words
            .slice(i, i + phraseLength)
            .join(" ");
			
        for (let j = i + 1; j <= words.length - phraseLength; j++) {
            let phraseCheck = words
                .slice(j, j + phraseLength)
                .join(" ");

            if (phrase === phraseCheck) {
                repeatedIndices.add(i);
                repeatedIndices.add(j);
            }
        }
    }
	
    return [...repeatedIndices];
}

console.log(findRepeatedPhrases(["the", "cat", "sat", "the", "cat"],2))

function analyzeTexts(words, phraseLength) {

    if (words.length === 0) {
        return [];
    }

    let results = [];

    for (let word of words) {
        results.push({
            repeatedPhrases: findRepeatedPhrases(word, phraseLength),
            palindromeBreaks: findPalindromeBreaks(word)
        });
    }
    return results;
}