export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  // Añade clase para visualizar PopUp
  open() {
    this._popup.classList.add("popup_opened");
  }

  // Elimina clase para ocultar PopUp
  close() {
    this._popup.classList.remove("popup_opened");
  }

  // Detector de eventos para botón ESC para cerrar PopUp
  _handleEscClose() {
    document.addEventListener("keydown", (evt) => {
      if (evt.key === "Escape") {
        this.close();
      }
    });
  }

  // Añade detectores de eventos
  setEventListeners() {
    document.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup_opened")) {
        this.close();
      }
    });

    // Ícono para cerrar PopUp
    this._popup.querySelector(".popup__close").addEventListener("click", () => {
      this.close();
    });

    this._handleEscClose();
  }
}
