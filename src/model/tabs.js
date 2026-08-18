import { hideAllTabs } from "./hide-all-tabs.js";

export function showTab1Content() {
  hideAllTabs();
  document.getElementById("tab1-content").classList.remove("hidden");
}

export function showTab2Content() {
  hideAllTabs();
  document.getElementById("tab2-content").classList.remove("hidden");
}

export function showTab3Content() {
  hideAllTabs();
  document.getElementById("tab3-content").classList.remove("hidden");
}
