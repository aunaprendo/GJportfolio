const fortune1 =
  "Your future will reward you for planning ahead, just as a squirrel’s stored acorns ensure comfort in every season.";
const fortune2 =
  "Like a squirrel finding hidden caches, you will soon rediscover an opportunity you thought was lost.";
const fortune3 =
  "A bold leap, taken with care, will open a new path in your future—trust your balance like a squirrel on a branch.";
const fortune4 =
  "Your coming days will bring steady growth, built quietly and consistently, the way a squirrel builds its winter store.";
const fortune5 =
  "An unexpected gift or success lies ahead, revealed when you stay curious and alert like a squirrel.";

const randomNumber = Math.floor(Math.random() * 5) + 1;

let selectedFortune;

if (randomNumber === 1) {
  selectedFortune = fortune1;
} else if (randomNumber === 2) {
  selectedFortune = fortune2;
} else if (randomNumber === 3) {
  selectedFortune = fortune3;
} else if (randomNumber === 4) {
  selectedFortune = fortune4;
} else if (randomNumber === 5) {
  selectedFortune = fortune5;
}

console.log(selectedFortune);
