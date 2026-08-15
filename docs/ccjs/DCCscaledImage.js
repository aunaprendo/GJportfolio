function scaleImage(size, scale) {
  let x = size.indexOf("x");
  let width = Number(size.slice(0, x));
  let height = Number(size.slice(x + 1));
  let newWidth = width * scale;
  let newHeight = height * scale;
  return `${newWidth}x${newHeight}`;
}
console.log(scaleImage("500x555", 2));
