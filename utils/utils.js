// Importar variable, función y clase
import { newValidations } from "../scripts/script.js";
import Card from "../components/Card.js";
import {
  // popUpProfile,
  // popUpAddPost,
  editProfileButton,
  // saveButtonEditProfile,
  addImageButton,
  // saveButtonAddImage,
  profileName,
  profileJob,
  nameInput,
  jobInput,
  linkInput,
  placeInput,
  photoSection,
} from "./constants.js";

// Importaciones que van en index.js
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";

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
  popup.querySelector(".popup__close").addEventListener("click", () => {
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
// editProfileButton.addEventListener("click", function () {
//   openPopUp(popUpProfile);
//   nameInput.value = profileName.textContent;
//   jobInput.value = profileJob.textContent;
//   // Función para validación al abrir formulario
//   newValidations[0].enableValidation();
// });

// Detector de eventos para botón submit de formulario Edit Profile
// saveButtonEditProfile.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   profileName.textContent = nameInput.value;
//   profileJob.textContent = jobInput.value;
//   closePopUp(popUpProfile);
// });

// Detector de eventos para añadir nueva imagen
// addImageButton.addEventListener("click", function () {
//   placeInput.value = "";
//   linkInput.value = "";
//   openPopUp(popUpAddPost);
//   // Función para validación al abrir formulario
//   newValidations[1].enableValidation();
// });

// Detector de eventos para botón submit de formulario Add Image
// saveButtonAddImage.addEventListener("click", function (evt) {
//   evt.preventDefault();

//   // Generación de instancias Card a partir de datos en formulario
//   const newCard = new Card(placeInput.value, linkInput.value, "#cards");
//   const cardElement = newCard.generateCard();
//   photoSection.prepend(cardElement);
//   closePopUp(popUpAddPost);
// });

export { openPopUp };
