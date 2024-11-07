// Clase Card para generación de imágenes
export default class Card {
  constructor({ text, image, handleCardClick }, cardSelector) {
    this._text = text;
    this._image = image;
    this._handleCardClick = handleCardClick;
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
      .querySelector(".photos__image")
      .addEventListener("click", () => {
        this._handleCardClick();
      });
  }

  // Funcionalidad del botón Like
  _handleLikeButton(evt) {
    evt.target.classList.toggle("photos__like_active");
  }
}
