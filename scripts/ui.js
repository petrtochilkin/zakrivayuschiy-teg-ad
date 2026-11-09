const saveDialog = document.querySelector(".dialog");
document
  .querySelector(".save-button")
  .addEventListener("click", () => saveDialog.showModal());
document.querySelectorAll(".card").forEach((card) => {
  const buttons = card.querySelectorAll(
    ".card__icon-button, .card__like-button",
  );
  buttons.forEach((button) =>
    button.addEventListener("click", () => {
      const pressed = card
        .querySelector(".like-icon")
        .classList.contains("is-liked");
      buttons.forEach((item) =>
        item.setAttribute("aria-pressed", String(pressed)),
      );
    }),
  );
});
