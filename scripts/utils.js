// Funciones para abrir PopUps (formularios)
function openPopUp(popup) {
  popup.classList.add("popup_opened");

  // Detectores de eventos para cerrar PopUps (formularios)
  document.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      closePopUp(popup);
    }
  });
  document.addEventListener("click", function (evt) {
    if (evt.target.classList.contains("popup_opened")) {
      closePopUp(popup);
    }
  });
  popup
    .querySelector(".popup__close")
    .addEventListener("click", function (evt) {
      closePopUp(popup);
    });
}

// Función para cerrar PopUps (formularios) y quitar detectores de eventos
function closePopUp(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopUp);
  document.removeEventListener("click", closePopUp);
  popup.querySelector(".popup__close").removeEventListener("click", closePopUp);
}

export { openPopUp, closePopUp };
