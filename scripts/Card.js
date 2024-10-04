// Importar archivos JS
import { openPopUp, closePopUp } from "./utils.js";

// ID de PopUp de imágenes
const popUpImage = document.querySelector("#popup-image");

// Clase Card para generación de imágenes
export default class Card {
  constructor(text, image, cardSelector) {
    this._text = text;
    this._image = image;
    this._cardSelector = cardSelector;
  }

  // Genera la plantilla para cada instancia de la clase y la regresa
  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._cardSelector)
      .content.querySelector(".photos__card")
      .cloneNode(true);

    return cardTemplate;
  }

  // Rellena la plantilla de la instancia con la información necesaria y la regresa
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".photos__image").src = this._image;
    this._element.querySelector(
      ".photos__image"
    ).alt = `Imagen de ${this._text}`;
    this._element.querySelector(".photos__place").textContent = this._text;

    return this._element;
  }

  // Detectores de eventos para las instancias de clase
  _setEventListeners() {
    this._element
      .querySelector(".photos__like")
      .addEventListener("click", (evt) => {
        this._handleLikeButton(evt);
      });

    this._element
      .querySelector(".photos__trash")
      .addEventListener("click", () => {
        this._handleDeleteButton();
      });

    this._element
      .querySelector(".photos__image")
      .addEventListener("click", () => {
        popUpImage.querySelector(".popup__image").src = this._image;
        popUpImage.querySelector(
          ".popup__image"
        ).alt = `Imagen de ${this._text}`;
        popUpImage.querySelector(".popup__place").textContent = this._text;
        openPopUp(popUpImage);
      });
  }

  // Funcionalidad del botón Like
  _handleLikeButton(evt) {
    evt.target.classList.toggle("photos__like_active");
  }

  // Funcionalidad del botón Delete
  _handleDeleteButton() {
    this._element.remove();
  }
}
