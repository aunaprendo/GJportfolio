const messageInput = document.getElementById("message-input");
const result = document.getElementById("result-message");
const checkMessageButton = document.getElementById("check-message-btn");


const helpRegex = /please help|assist me/i;

const denyList = [helpRegex];

const isSpam = (msg) => denyList.some(item => item.test(msg));


checkMessageButton.addEventListener("click", () => {
  if (messageInput.value === "") {
    alert("Please enter a message.");
    return;
  }

  result.textContent = isSpam(messageInput.value)
    ? "Oh no! This looks like a spam message."
    : "This message does not seem to contain any spam.";
  messageInput.value = "";
});


Example Code
const arr = ["A", "b", "C"];
arr.some(letter => letter === letter.toUpperCase());
Update the isSpam() function to use the some() method, which will check if testing msg against any of the regular expressions in denyList returns true."