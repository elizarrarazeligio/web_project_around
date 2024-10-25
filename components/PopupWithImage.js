import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor({ place, image }, popupSelector) {
    super(popupSelector);
    this._image = image;
    this._place = place;
  }

  open() {
    super.open();
    this._popup.querySelector(".popup__image").src = this._image;
    this._popup.querySelector(".popup__image").alt = `Imagen de ${this._place}`;
    this._popup.querySelector(".popup__place").textContent = this._place;
  }
}
