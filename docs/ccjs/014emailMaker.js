function maskEmail(email) {
  let at = email.indexOf("@");
  if (at === -1) return "Invalid email";
  let end = email.slice(at - 1);
  let starCount = email.indexOf("@") - 2;
  let stars = "*".repeat(starCount);
  return email[0] + stars + end;
}

let email = "apple.pie@example.com";
console.log(maskEmail(email));

email = "freecodecamp@example.com";
console.log(maskEmail(email));

email = "info@test.dev";
console.log(maskEmail(email));

email = "user@domain.org";
console.log(maskEmail(email));
