// Botones para editar perfil y añadir imágenes
const editProfileButton = document.querySelector(".profile__edit");
const addImageButton = document.querySelector(".profile__add");
const userImage = document.querySelector(".profile__image-user");

// Inputs para PopUp Editar Perfil
const nameInput = document.querySelector(".form__input_type_name");
const jobInput = document.querySelector(".form__input_type_job");

// Elementos del marcado a modificar
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__hobby");

// Array con formularios y parámetros de configuración
const formList = Array.from(document.querySelectorAll(".form"));

// Objeto con parámetros de configuración para validación de formularios
const configParameters = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_inactive",
  inputErrorClass: "form__input_type_error",
  errorSpanText: "form__input-error_active",
};

// Array vacío para cada instancia de FormValidator
let newValidations = [];

export {
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
};
