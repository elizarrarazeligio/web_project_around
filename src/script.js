// Importación de hojas de estilos
import "./styles/index.css";

// Importar clases y constantes JS
import FormValidator from "./components/FormValidator.js";
import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithConfirmation from "./components/PopupWithConfirmation.js";
import Section from "./components/Section.js";
import UserInfo from "./components/UserInfo.js";
import Api from "./components/Api.js";
import {
  createCard,
  assignDeleteIcon,
  handleServerRequest,
} from "./utils/utils.js";
import {
  editProfileButton,
  addImageButton,
  profileName,
  profileJob,
  formList,
  configParameters,
  newValidations,
  nameInput,
  jobInput,
  userImage,
} from "./utils/constants.js";

// Creación de instancia de Api para solicitudes a servidor
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web-es-cohort-17",
  headers: {
    authorization: "f05ef4e2-b711-4c0d-bffb-160d98715bd3",
    "Content-Type": "application/json",
  },
});

// Consigue la información del usuario del servidor
// api
handleServerRequest({
  request: api.getUserInfo(),
  handler: (userServerInfo) => {
    profileName.textContent = userServerInfo.name;
    profileJob.textContent = userServerInfo.about;
    userImage.onload;
    userImage.src = userServerInfo.avatar;
  },
});

// Generación de instancia para PopUp de imágenes
const newImagePopup = new PopupWithImage("#popup-image");
newImagePopup.setEventListeners();

// Generación de cartas iniciales obtenidas del servidor
// Acoplamiento débil (Loose Coupling)
api
  .getInitialCards()
  .then((initialCards) => {
    const cardList = new Section(
      {
        items: initialCards,
        renderer: (cardItem) => {
          const newCard = createCard(
            cardItem.name,
            cardItem.link,
            newImagePopup
          );
          const cardElement = newCard.generateCard();
          // Inserta ícono de borrar solamente a tarjetas propias
          assignDeleteIcon(cardItem, cardElement);
          cardList.addItem(cardElement);
        },
      },
      ".photos"
    );
    return cardList;
  })
  .then((cardList) => {
    cardList.renderItems();
  })
  .catch((err) => {
    console.log(err);
  });

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
      api
        .editUserInfo(inputValues.name, inputValues.about)
        .then((newUserInfo) => {
          userInfo.setUserInfo(newUserInfo.name, newUserInfo.about);
        })
        .catch((err) => {
          console.log(err);
        });
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
      api
        .addNewCard(inputValues.name, inputValues.link)
        .then((newPostInfo) => {
          const newCard = createCard(
            newPostInfo.name,
            newPostInfo.link,
            newImagePopup
          );
          const cardElement = newCard.generateCard();
          assignDeleteIcon(newPostInfo, cardElement);
          document.querySelector(".photos").prepend(cardElement);
        })
        .catch((err) => {
          console.log(err);
        });
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

// Generación de PopUp para borrar tarjetas
const popUpDeletePost = new PopupWithConfirmation("#popup-delete", {
  deleteFunction: (id) => {
    api
      .deleteCard(id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  },
});
popUpDeletePost.setEventListeners();
// Detector de eventos para borrar imágenes
document.addEventListener("click", (evt) => {
  if (evt.target.classList == "photos__trash") {
    popUpDeletePost.open(evt.target);
  }
});

// Generación de PopUp para cambiar Foto de Perfil
const popUpUserImage = new PopupWithForm(
  {
    sendForm: (inputValues) => {
      userImage.src = inputValues.user;
    },
  },
  "#popup-user"
);
popUpUserImage.setEventListeners();
userImage.parentNode.addEventListener("click", () => {
  popUpUserImage.open();
  // Función para validación de formulario
  newValidations[2].enableValidation();
});
