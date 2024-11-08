import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  // Abre PopUp y recibe el evt.target del elemento, para acceder a su nodo padre
  open(element) {
    super.open();
    this._element = element.parentNode;
  }

  // Añade detector de eventos al botón para borrar elemento
  setEventListeners() {
    super.setEventListeners();

    this._popup.querySelector(".form__button").addEventListener("click", () => {
      this._element.remove();
      this.close();
    });
  }
}
