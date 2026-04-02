const displayText = document.getElementById("display");
const clips = document.querySelectorAll(".clip");

function playSound(clip) {
  clips.forEach(c => {
    c.pause();
    c.currentTime = 0;
  });

  clip.play();
  displayText.innerText = clip.parentElement.id;

  setTimeout(() => {
    clip.pause();
    clip.currentTime = 0;
  }, 2000);
}

document.querySelectorAll(".drum-pad").forEach((pad) => {
  pad.addEventListener("click", function () {
    playSound(this.querySelector("audio"));
  });
});

document.addEventListener("keydown", (e) => {
  const clip = document.getElementById(e.key.toUpperCase());
  if (clip) playSound(clip);
});