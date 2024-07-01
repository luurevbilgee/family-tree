export class TypeWritter {
  txtElement: HTMLElement;
  words: string[];
  txt: string;
  wordIndex: number;
  wait: number;
  isDeleting: boolean;
  constructor(txtElement: HTMLElement, words: string[], wait = 4000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = wait;
    this.type();
    this.isDeleting = false;
  }
  type() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.txtElement.innerHTML = `<span class = "txt">${this.txt}</span>`;

    let typeSpeed = 400;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait;

      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;

      this.wordIndex++;

      typeSpeed = 500;
    }
    setTimeout(() => this.type(), typeSpeed);
  }
}

export function init() {
  const txtElement = document.querySelector(".text-type") as HTMLElement;
  if (txtElement) {
    const words = JSON.parse(txtElement.getAttribute("data-words")!);
    const wait = txtElement.getAttribute("data-wait");

    new TypeWritter(txtElement, words, wait ? parseInt(wait, 10) : undefined);
  }
}
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", init);
}
