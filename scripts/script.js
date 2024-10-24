// Importar archivos JS
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";

// Referencia a sección para añadir imágenes
const photoSection = document.querySelector(".photos");

// Constante con información de cartas iniciales
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

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
      const newCard = new Card(cardItem.name, cardItem.link, "#cards");
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

export { newValidations, photoSection };
