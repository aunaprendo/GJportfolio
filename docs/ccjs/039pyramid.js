function pyramid(string, i, boo) {
  let up = "";
  let down = "";

  for (let count = 1; count <= i; count++) {
    let bottom = i * 2 - 1;
    let space = i - count;
    let char = bottom - space * 2;
    up += " ".repeat(space) + string.repeat(char) + "\n";
  }

  for (let count = i; count >= 1; count--) {
    let bottom = i * 2 - 1;
    let space = i - count;
    let char = bottom - space * 2;
    down += " ".repeat(space) + string.repeat(char) + "\n";
  }

  if (boo == false) {
    return `\n${up}`;
  } else {
    return `\n${down}`;
  }
}

console.log(pyramid("o", 4, false));
