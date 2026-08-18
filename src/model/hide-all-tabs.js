export function hideAllTabs() {
  const TABS = document.querySelectorAll(".tab");

  TABS.forEach((tab) => {
    tab.classList.add("hidden");
  });
}
