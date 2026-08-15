const flashcard = document.getElementById("flashcard") as HTMLDivElement;
const cards = document.getElementById("cards") as HTMLDivElement;
const currentFront = document.getElementById("front") as HTMLDivElement;
const currentBack = document.getElementById("back") as HTMLDivElement;
const deleteBtn = document.getElementById("delete-btn") as HTMLButtonElement;
const entryForm = document.getElementById("entry-form") as HTMLFormElement;
const frontText = document.getElementById("front-text") as HTMLTextAreaElement;
const backText = document.getElementById("back-text") as HTMLTextAreaElement;
let selectedIndex: number | null = null;

interface FlashCard {
  questionText: string;
  questionAnswer: string;
}

const currentCards: FlashCard[] = [];

class InvalidUserInputError extends Error {
  constructor(message = "Invalid user input") {
    super(message);
    this.name = "InvalidUserInputError";
  }
}

function createCard(event: SubmitEvent): void {
  event.preventDefault();

  if (frontText.value.trim() === "" || backText.value.trim() === "") {
    throw new InvalidUserInputError();
  }

  const newCard: FlashCard = {
    questionText: frontText.value,
    questionAnswer: backText.value,
  };

  currentCards.push(newCard);
  selectedIndex = currentCards.length - 1;

  renderCards(currentCards);
  renderCurrent(newCard);
}

entryForm.addEventListener("submit", createCard);

function renderCurrent(card: FlashCard) {
  currentFront.innerHTML = card.questionText;
  currentBack.innerHTML = card.questionAnswer;
  return;
}

flashcard.addEventListener("click", () => {
  flashcard.classList.toggle("flipped");
});

function renderCards(currentCards: FlashCard[]) {
  let html = ``;
  currentCards.forEach((card, index) => {
    html += `
            <div class="cardStack" data-index="${index}">
                ${card.questionText}
            </div>
        `;
  });
  cards.innerHTML = html;
}

cards.addEventListener("click", (event) => {
  const target = event.target as HTMLDivElement;

  if (target.classList.contains("cardStack")) {
    const index = Number(target.dataset.index);

    selectedIndex = index;

    renderCurrent(currentCards[index]);
  }
});

deleteBtn.addEventListener("click", () => {
  if (selectedIndex === null) return;

  currentCards.splice(selectedIndex, 1);

  renderCards(currentCards);

  if (currentCards.length === 0) {
    selectedIndex = null;
    currentFront.textContent = "";
    currentBack.textContent = "";
    return;
  }

  selectedIndex = Math.max((selectedIndex ?? 0) - 1, 0);
  renderCurrent(currentCards[selectedIndex]);
});
