import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open({ place, image }) {
    super.open();
    this._popup.querySelector(".popup__image").src = image;
    this._popup.querySelector(".popup__image").alt = `Imagen de ${place}`;
    this._popup.querySelector(".popup__place").textContent = place;
  }
}
