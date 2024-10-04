// Importar archivos JS
import Card from "./Card.js";
import { openPopUp, closePopUp } from "./utils.js";

// IDs de PopUps
const popUpProfile = document.querySelector("#popup-profile");
const popUpAddPost = document.querySelector("#popup-add");

// Botones para editar perfil y añadir imágenes
const editProfileButton = document.querySelector(".profile__edit");
const saveButtonEditProfile = popUpProfile.querySelector(".form__button");
const addImageButton = document.querySelector(".profile__add");
const saveButtonAddImage = popUpAddPost.querySelector(".form__button");

// Elementos del marcado a modificar
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__hobby");
const photoSection = document.querySelector(".photos");

// Campos de entrada (inputs) de PopUps
const nameInput = document.querySelector(".form__input_type_name");
const jobInput = document.querySelector(".form__input_type_job");
const linkInput = document.querySelector(".form__input_type_link");
const placeInput = document.querySelector(".form__input_type_place");

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

// Generación de cartas iniciales
initialCards.forEach((card) => {
  const newCard = new Card(card.name, card.link, "#cards");
  const cardElement = newCard.generateCard();
  photoSection.append(cardElement);
});

// Generación de instancias Card a partir de datos en formulario Add Image
saveButtonAddImage.addEventListener("click", function (evt) {
  evt.preventDefault();
  const newCard = new Card(placeInput.value, linkInput.value, "#cards");
  const cardElement = newCard.generateCard();
  photoSection.prepend(cardElement);
  closePopUp(popUpAddPost);
});

// Event Listeners para abrir y guardar formularios
editProfileButton.addEventListener("click", function () {
  openPopUp(popUpProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  // Función para validación al abrir formulario
  enableValidation();
});

saveButtonEditProfile.addEventListener("click", function (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopUp(popUpProfile);
});

addImageButton.addEventListener("click", function () {
  placeInput.value = "";
  linkInput.value = "";
  openPopUp(popUpAddPost);
  // Función para validación al abrir formulario
  enableValidation();
});
