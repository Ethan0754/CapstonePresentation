import "./style.css";
import { pages } from "./sections.js";

const app = document.querySelector("#app");

let currentPage = "menu";
let audioInitialized = false;

const clickSound = new Audio("/audio/clickSound.mp3");
const music = new Audio("/audio/music.mp3");

music.loop = true;
music.volume = 0.25;
clickSound.volume = 0.25;

function initAudio() {
  if (audioInitialized) return;
  audioInitialized = true;

  music.play().catch(() => {
    console.log("Music playback blocked until further user interaction.");
  });
}

function playClick() {
  clickSound.pause();
  clickSound.currentTime = 0;
  clickSound.play().catch(() => {});
}

function render() {
  const page = pages[currentPage];

  if (page.type === "menu") {
    app.innerHTML = `
      <div class="screen menu-screen">

        <div class="menu-overlay">

          <h1 class="title">${page.title}</h1>

          <div class="splash">
            Now with Honors Students!
          </div>

          <div class="menu-buttons">
            ${page.buttons
              .map(
                (button) => `
                  <button class="mc-button" data-target="${button.target}">
                    ${button.label}
                  </button>
                `
              )
              .join("")}
          </div>

        </div>

        <div class="menu-footer">
          Capstone Presentation • Ethan Pendergraft • Spring 2026
        </div>

      </div>
    `;
  } else {
    app.innerHTML = `
      <div class="screen content-screen">
        <div class="book-shell">
          <div class="book-page">

            <div class="page-header">
              <div class="page-title">${page.title}</div>
              <div class="page-number">
                Page ${page.pageNumber ?? 1} of ${page.pageTotal ?? 1}
              </div>
            </div>

            <div class="page-content">
              ${page.body}
            </div>

            <div class="page-footer">
              <button
                class="page-turn page-turn-left ${!page.prev ? "disabled" : ""}"
                ${page.prev ? `data-target="${page.prev}"` : "disabled"}
                aria-label="Previous page"
              ></button>

              <div class="page-footer-spacer"></div>

              <button
                class="page-turn page-turn-right ${!page.next ? "disabled" : ""}"
                ${page.next ? `data-target="${page.next}"` : "disabled"}
                aria-label="Next page"
              ></button>
            </div>

          </div>
        </div>
      </div>
    `;
  }

  bindButtons();
}

function bindButtons() {
  const buttons = document.querySelectorAll("[data-target]");

  buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      initAudio();
    });

    button.addEventListener("click", () => {
      if (button.disabled) return;

      initAudio();
      playClick();
      currentPage = button.dataset.target;
      render();
    });
  });
}

document.addEventListener("keydown", (e) => {
  const page = pages[currentPage];

  if (e.key === "Escape") {
    if (currentPage !== "menu") {
      currentPage = "menu";
      render();
    }
    return;
  }

  if (!page || page.type !== "content") return;

  if (e.key === "ArrowRight" && page.next) {
    initAudio();
    playClick();
    currentPage = page.next;
    render();
  }

  if (e.key === "ArrowLeft" && page.prev) {
    initAudio();
    playClick();
    currentPage = page.prev;
    render();
  }
});

render();