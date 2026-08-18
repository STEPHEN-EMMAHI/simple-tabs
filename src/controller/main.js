import { systemThemeChange } from "../model/changetheme.js";
import { hideAllTabs } from "../model/hide-all-tabs.js";
import { navBar } from "../model/navbar.js";
import {
  showTab1Content,
  showTab2Content,
  showTab3Content,
} from "../model/tabs.js";

document.addEventListener("DOMContentLoaded", showTab1Content);

// apply event delegation on navbar
const BUTTON_CONTAINER = document.getElementById("button-container");
if (BUTTON_CONTAINER) {
  BUTTON_CONTAINER.addEventListener("click", navBar);
}

// show tab1 content when tab1 button is clicked
const TAB1_CONTENT = document.getElementById("tab1");
TAB1_CONTENT.addEventListener("click", showTab1Content);

// show tab2 content when tab2 button is clicked
const TAB2_CONTENT = document.getElementById("tab2");
TAB2_CONTENT.addEventListener("click", showTab2Content);

// show tab3 content when tab3 button is clicked
const TAB3_CONTENT = document.getElementById("tab3");
TAB3_CONTENT.addEventListener("click", showTab3Content);

// change system theme
const IS_DARK = window.matchMedia("(prefers-color-scheme: dark)");
systemThemeChange(IS_DARK);
IS_DARK.addEventListener("change", systemThemeChange);
