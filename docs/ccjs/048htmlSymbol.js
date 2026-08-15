function convertHTML(string) {
  let newString = "";
  let chars = string.split("");
  for (var i = 0; i < chars.length; i++) {
    if (chars[i] === "&") {
      chars[i] = "&amp;";
    } else if (chars[i] === "<") {
      chars[i] = "&lt;";
    } else if (chars[i] === ">") {
      chars[i] = "&gt;";
    } else if (chars[i] === '"') {
      chars[i] = "&quot;";
    } else if (chars[i] === "'") {
      chars[i] = "&apos;";
    }
  }
  return chars.join("");
}

console.log(convertHTML("Schindler's List"));
