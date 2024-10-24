import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ sendForm }, popupSelector) {
    super(popupSelector);
    this._sendForm = sendForm;
  }

  // Recopila los datos de los inputs
  _getInputValues() {}

  // Añade al método padre un reseteo de formulario
  close() {
    super.close();
    this._popup.querySelector(".form").reset();
  }

  // Añade al método padre los siguientes detectores de eventos:
  setEventListeners() {
    super.setEventListeners();

    // Establece comportamiento de Submit
    this._popup
      .querySelector(".form__button")
      .addEventListener("click", (evt) => {
        evt.preventDefault();
        this.close();
      });

    // Ícono para cerrar PopUp
    this._popup.querySelector(".popup__close").addEventListener("click", () => {
      this.close();
    });
  }
}
