abstract class Dino<T> {
  emoji!: T;
  emojiElement!: HTMLParagraphElement;
  constructor(emojiElement: HTMLParagraphElement) {
    this.emojiElement = emojiElement;
  }

  abstract render(): void;
}

class Tyrannosaurus extends Dino<string> {
  constructor(emojiElement: HTMLParagraphElement) {
    super(emojiElement);
    this.emoji = "🦖";
  }

  override render() {
    this.emojiElement.innerText = this.emoji;
  }
}

class Sauropod extends Dino<string> {
  constructor(emojiElement: HTMLParagraphElement) {
    super(emojiElement);
    this.emoji = "🦕";
  }

  override render() {
    this.emojiElement.innerText = this.emoji;
  }
}

function isSelect(element: EventTarget | null): element is HTMLSelectElement {
  return element instanceof HTMLSelectElement;
}

const DinoEmojiElement = document.querySelector<HTMLParagraphElement>("#Dino-emoji")!;
const DinoMap: Record<string, Dino<string>> = {
  Tyrannosaurus: new Tyrannosaurus(DinoEmojiElement),
  Sauropod: new Sauropod(DinoEmojiElement),
};

const selectElement = document.querySelector<HTMLSelectElement>("#dinosaur")!;
selectElement.addEventListener("change", (e) => {
  if (isSelect(e.target)) {
    DinoMap[e.target.value].render();
  }
});
export {};
