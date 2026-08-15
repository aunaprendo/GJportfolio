let count = document.getElementById("text-input");
let counter = document.getElementById("char-count");

count.addEventListener("input", () => {
  let num = count.value.length;
  count.value = count.value.slice(0, 50);

  if (num >= 50) {
    counter.textContent = `Nut Count: 50/50`;
    counter.setAttribute("class", "warning");
  } else {
    counter.textContent = `Nut Count: ${num}/50`;
    counter.setAttribute("class", "good");
  }
});
