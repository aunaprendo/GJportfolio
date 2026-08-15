const noteEl = document.getElementById("note");
const statusEl = document.getElementById("status");

let currentContent = "";

noteEl.addEventListener("focus", () => {
  statusEl.textContent = "";
});

noteEl.addEventListener("blur", () => {
  const newContent = noteEl.innerHTML;

  if (currentContent === newContent) {
    return;
  }

  currentContent = newContent;
  console.log(currentContent);

  statusEl.textContent = "Your nut has been saved secretly!";
});

window.addEventListener("DOMContentLoaded", () => {
  currentContent = noteEl.textContent;
});
