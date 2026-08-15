const themes = [
  { name: "squirrels", message: "Nuts Hidden 🌰" },
  { name: "dinosaurs", message: "RAWR 🦖" },
  { name: "trees", message: "Drey Built 🌳" },
];

const btn = document.getElementById("theme-switcher-button");
const menu = document.getElementById("theme-dropdown");
const body = document.querySelector("body");
const message = document.getElementById("message");
const styles = document.querySelectorAll("ul li");

btn.addEventListener("click", () => {
  if (menu.hasAttribute("hidden")) {
    menu.removeAttribute("hidden");
    btn.setAttribute("aria-expanded", "true");
  } else {
    menu.setAttribute("hidden", "");
    btn.setAttribute("aria-expanded", "false");
  }
});

styles.forEach((style) => {
  style.addEventListener("click", () => {
    for (let i = 0; i < themes.length; i++) {
      if (themes[i].name === style.innerText) {
        message.innerText = themes[i].message;
        body.setAttribute("class", `theme-${style.innerText}`);
        setTimeout(() => {
          message.innerText = "";
        }, 6000);
      }
    }
  });
});
