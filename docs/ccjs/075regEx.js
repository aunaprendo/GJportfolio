const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");
const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

function getFlags() {
	 let flags = (caseInsensitiveFlag.checked ? "i" : "") +
    (globalFlag.checked ? "g" : "");
		return flags;
	 };

function comparisonTest() {

	const regexInput = regexPattern.value;
	const regexTester = new RegExp(regexInput, getFlags());

	const originalText = stringToTest.textContent;
	const comparison = originalText.match(regexTester);

	if (comparison === null) {
		testResult.textContent = "no match";
	} else {
	testResult.textContent = comparison.join(", ");
		
	let highlightedString = originalText.replace(regexTester, match => {
		return `<span class="highlight">${match}</span>`;
	});

		stringToTest.innerHTML = highlightedString;
	}
}

testButton.addEventListener("click", comparisonTest); 

