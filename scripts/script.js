// Importar archivos JS
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import { initialCards } from "../utils/constants.js";

// Array con formularios y parámetros de configuración
const formList = Array.from(document.querySelectorAll(".form"));
const configParameters = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_inactive",
  inputErrorClass: "form__input_type_error",
  errorSpanText: "form__input-error_active",
};

// Generación de cartas iniciales de sección de fotos
// Acoplamiento débil (Loose Coupling)
const cardList = new Section(
  {
    items: initialCards,
    renderer: (cardItem) => {
      const newCard = new Card(
        {
          text: cardItem.name,
          image: cardItem.link,
          handleCardClick: () => {
            const newImagePopup = new PopupWithImage(
              {
                place: cardItem.name,
                image: cardItem.link,
              },
              "#popup-image"
            );
            newImagePopup.setEventListeners();
            newImagePopup.open();
          },
        },
        "#cards"
      );
      const cardElement = newCard.generateCard();
      cardList.addItem(cardElement);
    },
  },
  ".photos"
);
cardList.renderItems();

// Generación de instancias FormValidator para validación de formularios
let newValidations = [];
formList.forEach((formElement, index) => {
  newValidations[index] = new FormValidator(configParameters, formElement);
});

export { newValidations };
