let count = 0;

function cardCounter(card) {
  if (card == 2 || card == 3 || card == 4 || card == 5 || card == 6) {
    count = count + 1;
  } else if (card == 7 || card == 8 || card == 9) {
    count = count + 0;
  } else if (card == 10 || card == "J" || card == "Q" || card == "K" || card == "A") {
    count = count - 1;
  }
  if (count > 0) {
    return count + " Bet";
  } else if (count <= 0) {
    return count + " Hold";
  }
}

//AI VERSION:

let count = 0;

function cardCounter(card) {
  if (card === 2 || card === 3 || card === 4 || card === 5 || card === 6) {
    count++;
  } else if (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A") {
    count--;
  }

  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}
