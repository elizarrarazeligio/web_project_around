export class Card {
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
      .addEventListener("click", function (evt) {
        evt.target.classList.toggle("photos__like_active");
      });

    this._element
      .querySelector(".photos__trash")
      .addEventListener("click", () => {
        this._handleDeleteButton();
      });
  }

  // _handleLikeButton() {
  //   this._element
  //     .querySelector(".photos__like")
  //     .classList.toggle("photos__like_active");
  // }

  _handleDeleteButton() {
    this._element.remove();
  }
}
