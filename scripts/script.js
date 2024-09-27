// Referenciar los objetos del DOM para utilizarlos
const editButton = document.querySelector(".profile__edit");
const addButton = document.querySelector(".profile__add");
const popUpProfile = document.querySelector("#popup-profile");
const saveButtonProfile = popUpProfile.querySelector(".form__button");
const popUpAddPost = document.querySelector("#popup-add");
const saveButtonImage = popUpAddPost.querySelector(".form__button");
const popUpImage = document.querySelector("#popup-image");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__hobby");
const photoSection = document.querySelector(".photos");
const closeButtons = document.querySelectorAll(".popup__close");

// Constante asignadas a los inputs de ambos popups
const nameInput = document.querySelector(".form__input_type_name");
const jobInput = document.querySelector(".form__input_type_job");
const linkInput = document.querySelector(".form__input_type_link");
const placeInput = document.querySelector(".form__input_type_place");

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

// Generación de cartas principales
initialCards.forEach((card) => {
  const newPost = addPosts(card.name, card.link);
  photoSection.append(newPost);
});

// Función para añadir nuevas cartas / posts
function addPosts(name, link) {
  const cardTemplate = document.querySelector("#cards").content;

  const post = cardTemplate.querySelector(".photos__card").cloneNode(true);
  const image = post.querySelector(".photos__image");
  image.src = link;
  image.alt = `Imagen de ${name}`;

  post.querySelector(".photos__place").textContent = name;
  post.querySelector(".photos__like").src = "./images/boton_like.svg";
  post.querySelector(".photos__trash").addEventListener("click", function () {
    post.remove();
  });
  post.querySelector(".photos__like").addEventListener("click", function (evt) {
    evt.target.classList.toggle("photos__like_active");
  });
  image.addEventListener("click", function () {
    openPopUp(popUpImage);
    popUpImage.querySelector(".popup__image").src = link;
    popUpImage.querySelector(".popup__place").textContent = name;
  });

  return post;
}

// Funciones para abrir y cerrar formularios
function openPopUp(popup) {
  popup.classList.add("popup_opened");
}

function closePopUp(popup) {
  popup.classList.remove("popup_opened");
}

// Event Listeners para abrir y guardar formularios
editButton.addEventListener("click", function () {
  openPopUp(popUpProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

saveButtonProfile.addEventListener("click", function (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopUp(popUpProfile);
});

addButton.addEventListener("click", function () {
  placeInput.value = "";
  linkInput.value = "";
  openPopUp(popUpAddPost);
});

saveButtonImage.addEventListener("click", function (evt) {
  evt.preventDefault();
  const newPost = addPosts(placeInput.value, linkInput.value);
  photoSection.prepend(newPost);
  closePopUp(popUpAddPost);
});

//Event Listeners para cerrar formularios
closeButtons.forEach((item) => {
  item.addEventListener("click", function () {
    closePopUp(popUpAddPost);
    closePopUp(popUpProfile);
    closePopUp(popUpImage);
  });
});

document.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    closePopUp(popUpAddPost);
    closePopUp(popUpProfile);
    closePopUp(popUpImage);
  }
});

document.addEventListener("click", function (evt) {
  if (evt.target.classList.contains("popup_opened")) {
    closePopUp(popUpAddPost);
    closePopUp(popUpProfile);
    closePopUp(popUpImage);
  }
});
