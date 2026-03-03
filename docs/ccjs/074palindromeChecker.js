const checkMessageButton = document.getElementById("check-btn");
const messageInput = document.getElementById("text-input");
const result = document.getElementById("result");

checkMessageButton.addEventListener("click", () => {

  if (messageInput.value === "") {
    alert("Please input a value");
    return;
  }

  const cleanMessage = messageInput.value
    .replace(/[^a-z0-9]/ig, "")
    .toLowerCase();

  const reverseMessage = cleanMessage
    .split("")
    .reverse()
    .join("");

  if (reverseMessage === cleanMessage) {
    result.innerText = `${messageInput.value} is a palindrome`;
  } else {
    result.innerText = `${messageInput.value} is not a palindrome`;
  }

  messageInput.value = ""; 
});
