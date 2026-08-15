function generatePassword(length) {
  let options = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let array = [];
  for (var i = 0; i < length; i++) {
    let random = Math.floor(Math.random() * 72);
    let char = options[random];
    array.push(char);
  }
  let unite = array.join("");
  return unite;
}

let password = generatePassword(8);
console.log(`Generated password: ${password}`);
