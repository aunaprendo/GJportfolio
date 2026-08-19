"use strict";
const flashcard = document.getElementById("flashcard");
const cards = document.getElementById("cards");
const currentFront = document.getElementById("front");
const currentBack = document.getElementById("back");
const deleteBtn = document.getElementById("delete-btn");
const entryForm = document.getElementById("entry-form");
const frontText = document.getElementById("front-text");
const backText = document.getElementById("back-text");
let selectedIndex = null;
const currentCards = [];
class InvalidUserInputError extends Error {
    constructor(message = "Invalid user input") {
        super(message);
        this.name = "InvalidUserInputError";
    }
}
function createCard(event) {
    event.preventDefault();
    if (frontText.value.trim() === "" || backText.value.trim() === "") {
        throw new InvalidUserInputError();
    }
    const newCard = {
        questionText: frontText.value,
        questionAnswer: backText.value,
    };
    currentCards.push(newCard);
    selectedIndex = currentCards.length - 1;
    renderCards(currentCards);
    renderCurrent(newCard);
}
entryForm.addEventListener("submit", createCard);
function renderCurrent(card) {
    currentFront.innerHTML = card.questionText;
    currentBack.innerHTML = card.questionAnswer;
    return;
}
flashcard.addEventListener("click", () => {
    flashcard.classList.toggle("flipped");
});
function renderCards(currentCards) {
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
    const target = event.target;
    if (target.classList.contains("cardStack")) {
        const index = Number(target.dataset.index);
        selectedIndex = index;
        renderCurrent(currentCards[index]);
    }
});
deleteBtn.addEventListener("click", () => {
    if (selectedIndex === null)
        return;
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
