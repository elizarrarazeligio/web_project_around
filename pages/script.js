// Importar clases y constantes JS
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import { createCard } from "../utils/utils.js";
import {
  editProfileButton,
  addImageButton,
  profileName,
  profileJob,
  initialCards,
  formList,
  configParameters,
  newValidations,
  nameInput,
  jobInput,
} from "../utils/constants.js";

// Generación de instancia para PopUp de imágenes
const newImagePopup = new PopupWithImage("#popup-image");
newImagePopup.setEventListeners();

// Generación de cartas iniciales de sección de fotos
// Acoplamiento débil (Loose Coupling)
const cardList = new Section(
  {
    items: initialCards,
    renderer: (cardItem) => {
      const newCard = createCard(cardItem.name, cardItem.link);
      const cardElement = newCard.generateCard();
      cardList.addItem(cardElement);
    },
  },
  ".photos"
);
cardList.renderItems();

// Generación de instancias FormValidator para validación de formularios
formList.forEach((formElement, index) => {
  newValidations[index] = new FormValidator(configParameters, formElement);
});

// Generación de instancia con información de usuario
const userInfo = new UserInfo({
  userName: profileName,
  userJob: profileJob,
});

// Generación de PopUp para editar perfil
const popUpProfile = new PopupWithForm(
  {
    sendForm: (inputValues) => {
      userInfo.setUserInfo(inputValues.name, inputValues.about);
    },
  },
  "#popup-profile"
);
popUpProfile.setEventListeners();
editProfileButton.addEventListener("click", () => {
  const currentUserInfo = userInfo.getUserInfo();
  nameInput.value = currentUserInfo.name;
  jobInput.value = currentUserInfo.job;
  popUpProfile.open();
  // Función para validación al abrir formulario
  newValidations[0].enableValidation();
});

// Generación de PopUp para añadir nuevo Post
const popUpAddPost = new PopupWithForm(
  {
    sendForm: (inputValues) => {
      const newCard = createCard(inputValues.name, inputValues.link);
      const cardElement = newCard.generateCard();
      document.querySelector(".photos").prepend(cardElement);
    },
  },
  "#popup-add"
);
popUpAddPost.setEventListeners();
addImageButton.addEventListener("click", () => {
  popUpAddPost.open();
  // Función para validación al abrir formulario
  newValidations[1].enableValidation();
});