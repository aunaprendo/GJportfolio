

const flashcard = document.getElementById("flashcard") as HTMLDivElement;
const cards = document.getElementById("cards") as HTMLDivElement;
const currentFront = document.getElementById("front") as HTMLDivElement;
const currentBack = document.getElementById("back") as HTMLDivElement;
const deleteBtn = document.getElementById("delete-btn") as HTMLButtonElement;
const addBtn = document.getElementById("add-btn") as HTMLButtonElement;
const frontText = document.getElementById("front-text") as HTMLTextAreaElement;
const backText = document.getElementById("back-text") as HTMLTextAreaElement;
let selectedIndex: number | null = null;

interface FlashCard {
  questionText: string;
  questionAnswer: string;
}

const currentCards: FlashCard[] = [];

flashcard.addEventListener("click", () => {
  flashcard.classList.toggle("flipped");
})

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

cards.addEventListener("click", (event) => {
    const target = event.target as HTMLDivElement;

    if (target.classList.contains("cardStack")) {
        const index = Number(target.dataset.index);

        selectedIndex = index;

        renderCurrent(currentCards[index]);
    }
});

function createCard(): FlashCard {
  const newCard: FlashCard = {
    questionText: frontText.value,
    questionAnswer: backText.value,
  };
  currentCards.push(newCard);
  renderCards(currentCards);
  renderCurrent(newCard);
  return newCard;
}

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

function renderCurrent(card: FlashCard) {
    currentFront.innerHTML = card.questionText;
    currentBack.innerHTML = card.questionAnswer;
    return;
}
