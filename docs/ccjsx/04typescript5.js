class Dino {
    emoji;
    emojiElement;
    constructor(emojiElement) {
        this.emojiElement = emojiElement;
    }
}
class Tyrannosaurus extends Dino {
    constructor(emojiElement) {
        super(emojiElement);
        this.emoji = "🦖";
    }
    render() {
        this.emojiElement.innerText = this.emoji;
    }
}
class Sauropod extends Dino {
    constructor(emojiElement) {
        super(emojiElement);
        this.emoji = "🦕";
    }
    render() {
        this.emojiElement.innerText = this.emoji;
    }
}
function isSelect(element) {
    return element instanceof HTMLSelectElement;
}
const DinoEmojiElement = document.querySelector("#Dino-emoji");
const DinoMap = {
    Tyrannosaurus: new Tyrannosaurus(DinoEmojiElement),
    Sauropod: new Sauropod(DinoEmojiElement),
};
const selectElement = document.querySelector("#dinosaur");
selectElement.addEventListener("change", (e) => {
    if (isSelect(e.target)) {
        DinoMap[e.target.value].render();
    }
});
export {};
