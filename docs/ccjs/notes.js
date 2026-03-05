



	let highlightedString = originalText.replace(regexTester, match => {
		return `<span class="highlight">${match}</span>`;
	});
	
		const regexInput = regexPattern.value;
	const regexTester = new RegExp(regexInput, getFlags());
	
	






Spinal case is a string format where all words are in lowercase and separated by hyphens. "this-is-spinal-tap" is an example of a string in spinal case.

The spinalCase function should return the string in spinal case format. For example, if the argument is ProductLanding page, the function should return product-landing-page.



Waiting: 3. spinalCase("This Is Spinal Tap") should return the string this-is-spinal-tap.
Waiting: 4. spinalCase("thisIsSpinalTap") should return the string this-is-spinal-tap.
Waiting: 5. spinalCase("The_Andy_Griffith_Show") should return the string the-andy-griffith-show.
Waiting: 6. spinalCase("Teletubbies say Eh-oh") should return the string teletubbies-say-eh-oh.
Waiting: 7. spinalCase("AllThe-small Things") should return the string all-the-small-things.