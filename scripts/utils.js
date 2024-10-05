// Importar variable, dunción y clase
import { newValidations, photoSection } from "./script.js";
import Card from "./Card.js";

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

// Campos de entrada (inputs) de PopUps
const nameInput = document.querySelector(".form__input_type_name");
const jobInput = document.querySelector(".form__input_type_job");
const linkInput = document.querySelector(".form__input_type_link");
const placeInput = document.querySelector(".form__input_type_place");

// Funciones para abrir PopUps (formularios)
function openPopUp(popup) {
  popup.classList.add("popup_opened");

  // Detectores de eventos para cerrar PopUps (formularios)
  document.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      closePopUp(popup);
    }
  });
  document.addEventListener("click", function (evt) {
    if (evt.target.classList.contains("popup_opened")) {
      closePopUp(popup);
    }
  });
  popup
    .querySelector(".popup__close")
    .addEventListener("click", function (evt) {
      closePopUp(popup);
    });
}

// Función para cerrar PopUps (formularios) y quitar detectores de eventos
function closePopUp(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopUp);
  document.removeEventListener("click", closePopUp);
  popup.querySelector(".popup__close").removeEventListener("click", closePopUp);
}

// Detector de eventos para editar perfil de usuario
editProfileButton.addEventListener("click", function () {
  openPopUp(popUpProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  // Función para validación al abrir formulario
  newValidations[0].enableValidation();
});

// Detector de eventos para botón submit de formulario Edit Profile
saveButtonEditProfile.addEventListener("click", function (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopUp(popUpProfile);
});

// Detector de eventos para añadir nueva imagen
addImageButton.addEventListener("click", function () {
  placeInput.value = "";
  linkInput.value = "";
  openPopUp(popUpAddPost);
  // Función para validación al abrir formulario
  newValidations[1].enableValidation();
});

// Detector de eventos para botón submit de formulario Add Image
saveButtonAddImage.addEventListener("click", function (evt) {
  evt.preventDefault();

  // Generación de instancias Card a partir de datos en formulario
  const newCard = new Card(placeInput.value, linkInput.value, "#cards");
  const cardElement = newCard.generateCard();
  photoSection.prepend(cardElement);
  closePopUp(popUpAddPost);
});

export { openPopUp, closePopUp };
