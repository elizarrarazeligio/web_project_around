import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ sendForm }, popupSelector) {
    super(popupSelector);
    this._sendForm = sendForm;
  }

  // Recopila los datos de los inputs
  _getInputValues() {
    this._inputList = this._popup.querySelectorAll(".form__input");
    this._inputValues = {};

    // Agrupa los inputs en una lista y añade sus valores en un objeto vacío
    this._inputList.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });

    return this._inputValues;
  }

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
        this._sendForm(this._getInputValues());
      });
  }
}
