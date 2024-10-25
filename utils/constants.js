// IDs de PopUps
// const popUpProfile = document.querySelector("#popup-profile");
// const popUpAddPost = document.querySelector("#popup-add");

// Botones para editar perfil y añadir imágenes
const editProfileButton = document.querySelector(".profile__edit");
// const saveButtonEditProfile = popUpProfile.querySelector(".form__button");
const addImageButton = document.querySelector(".profile__add");
// const saveButtonAddImage = popUpAddPost.querySelector(".form__button");

// Elementos del marcado a modificar
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__hobby");

// Campos de entrada (inputs) de PopUps
const nameInput = document.querySelector(".form__input_type_name");
const jobInput = document.querySelector(".form__input_type_job");
const linkInput = document.querySelector(".form__input_type_link");
const placeInput = document.querySelector(".form__input_type_place");

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

export {
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
  initialCards,
};
