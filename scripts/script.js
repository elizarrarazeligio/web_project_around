// Importar clases y constantes JS
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import {
  initialCards,
  addImageButton,
  editProfileButton,
} from "../utils/constants.js";

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

// Generación de PopUp para editar perfil
const popUpProfile = new PopupWithForm(
  {
    sendForm: (inputValues) => {
      console.log(inputValues);
    },
  },
  "#popup-profile"
);
popUpProfile.setEventListeners();
editProfileButton.addEventListener("click", () => {
  popUpProfile.open();
});

// Generación de PopUp para añadir nuevo Post
const popUpAddPost = new PopupWithForm(
  {
    sendForm: (inputValues) => {
      const newCard = new Card(
        {
          text: inputValues.name,
          image: inputValues.link,
          handleCardClick: () => {
            const newImagePopup = new PopupWithImage(
              {
                place: inputValues.name,
                image: inputValues.link,
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
      document.querySelector(".photos").prepend(cardElement);
    },
  },
  "#popup-add"
);
popUpAddPost.setEventListeners();
addImageButton.addEventListener("click", () => {
  popUpAddPost.open();
});

// Generación de instancias FormValidator para validación de formularios
let newValidations = [];
formList.forEach((formElement, index) => {
  newValidations[index] = new FormValidator(configParameters, formElement);
});

export { newValidations };
