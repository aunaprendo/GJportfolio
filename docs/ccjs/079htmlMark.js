const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

markdownInput.addEventListener("input", () => {
	htmlOutput.innerText = convertMarkdown();
	preview.innerHTML = convertMarkdown();
});

function convertMarkdown() {
	const inputText = markdownInput.value;
	const headingTest = /^\s*(?<hashes>#{1,6})\s(?<title>.*)/gm;
	let html = inputText.replace(headingTest, (match, hashes, title) => {
  	hashes = hashes.length;
			return `<h${hashes}>${title}</h${hashes}>`;
		});		 

		const boldTest = /__(?<text>.*?)__/gm;
		html = html.replace(boldTest, (match, text) => {
			return `<strong>${text}</strong>`;
		});		
		
		const boldTest2 = /\*\*(?<text>.*?)\*\*/gm;
		html = html.replace(boldTest2, (match, text) => {
			return `<strong>${text}</strong>`;
		});		
			
		const italicTest = /\*(?<text>.*)\*/gm;
		html = html.replace(italicTest, (match, text) => {
			return `<em>${text}</em>`;
		});		 
		
		const italicTest2 = /_(?<text>.*?)_/gm;
		html = html.replace(italicTest2, (match, text) => {
			return `<em>${text}</em>`;
		});
	
		const imgTest = /^!\[(?<altText>.*?)\]\((?<imgSource>.*?)\)/gm;
		html = html.replace(imgTest, (match, altText, imgSource) => {
  		return `<img alt="${altText}" src="${imgSource}">`;
		});		
	
		const urlTest = /^\[(?<linkText>.*?)\]\((?<link>.*?)\)/gm;
		html = html.replace(urlTest, (match, linkText, link) => {
  		return `<a href="${link}">${linkText}</a>`;
		});	
	
		const quoteTest = /^>\s(?<text>.*)/gm;
		html = html.replace(quoteTest, (match, text) => {
  		return `<blockquote>${text}</blockquote>`;
		});	
		
		return html;
};
