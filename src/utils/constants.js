// Botones para editar perfil y añadir imágenes
const editProfileButton = document.querySelector(".profile__edit");
const addImageButton = document.querySelector(".profile__add");
const userImageEdit = document.querySelector(".profile__image");

// Inputs para PopUp Editar Perfil
const nameInput = document.querySelector(".form__input_type_name");
const jobInput = document.querySelector(".form__input_type_job");

// Elementos del marcado a modificar
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__hobby");

// Array con formularios y parámetros de configuración
const formList = Array.from(document.querySelectorAll(".form"));

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

// Objeto con parámetros de configuración para validación de formularios
const configParameters = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_inactive",
  inputErrorClass: "form__input_type_error",
  errorSpanText: "form__input-error_active",
};

// Array vacío para cada instancia de FromValidator
let newValidations = [];

export {
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
  userImageEdit,
};
