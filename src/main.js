import "./style.css";
import { pages } from "./sections.js";

const app = document.querySelector("#app");

let currentPage = "menu";
let audioInitialized = false;

const clickSound = new Audio("/audio/clickSound.mp3");
const music = new Audio("/audio/music.mp3");

music.loop = true;
music.volume = 1.0;

function initAudio() {
  if (audioInitialized) return;
  audioInitialized = true;

  music.play().catch(() => {
    console.log("Music playback blocked until further user interaction.");
  });
}

function playClick() {
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
        <div class="book-panel">
          <h2>${page.title}</h2>
          <div class="book-body">
            ${page.body}
          </div>
          <div class="nav-row">
            <button class="mc-button small" data-target="menu">Back to Menu</button>
            ${
              page.prev
                ? `<button class="mc-button small" data-target="${page.prev}">Previous</button>`
                : ""
            }
            ${
              page.next
                ? `<button class="mc-button small" data-target="${page.next}">Next</button>`
                : ""
            }
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
      initAudio();
      playClick();
      currentPage = button.dataset.target;
      render();
    });
  });
}
render();