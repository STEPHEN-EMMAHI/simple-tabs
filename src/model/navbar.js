export function navBar(event) {
  // get the closest element
  const CLOSEST_BUTTON = event.target.closest("button");

  // if the closest element is not a button, return
  if (!CLOSEST_BUTTON) return;

  // remove styles from the previous button
  const ACTIVE_BUTTON = document.querySelector("button.active");
  ACTIVE_BUTTON.classList.remove(
    "active",
    "bg-blue-700",
    "text-white",
    "rounded-[0.5em]",
    "scale-100",
  );

  // add styles to the newly clicked button
  CLOSEST_BUTTON.classList.add(
    "active",
    "bg-blue-700",
    "text-white",
    "rounded-[0.5em]",
    "scale-100",
  );

  //
}
