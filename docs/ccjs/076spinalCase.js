function spinalCase(string) {
	const regexSpaces = /[\s_]+/g
	const regexCaps = /([a-z])(?=[A-Z])/g;
	
	let spinalString = string.replace(regexSpaces, "-").replace(regexCaps, "$1-").toLowerCase();
	
	return spinalString;
};

console.log(spinalCase("testString test good_Cat"));


