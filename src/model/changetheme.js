export function systemThemeChange(e) {
  if (e.matches) {
    darkMode();
  } else {
    lightMode();
  }
}

function lightMode() {
  document.querySelector(".body-element").classList.remove("bg-zinc-900");
  document
    .querySelector(".tab-content-container")
    .classList.remove("border-white");
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.remove("text-white");
  });
}

function darkMode() {
  document.querySelector(".body-element").classList.add("bg-zinc-900");
  document
    .querySelector(".tab-content-container")
    .classList.add("border-white");
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.add("text-white");
  });
}
