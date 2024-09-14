const editButton = document.querySelector(".profile__edit");
const closeButton = document.querySelector(".popup__close");
const saveButton = document.querySelector(".form__button");
const popUp = document.querySelector(".popup");
const formProfile = document.querySelector(".form");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__hobby");
const nameInput = document.querySelector(".form__input_type_name");
const jobInput = document.querySelector(".form__input_type_job");
const photoSection = document.querySelector(".photos");
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

initialCards.forEach((card) => {
  addPosts(card);
});

function openClosePopup() {
  popUp.classList.toggle("popup_opened");

  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  openClosePopup();
}

function addPosts(card) {
  const cards = document.querySelector("#cards").content;

  const post = cards.querySelector(".photos__card").cloneNode(true);
  const image = post.querySelector(".photos__image");
  image.src = card.link;
  image.alt = `Imagen de ${card.name}`;
  post.querySelector(".photos__place").textContent = card.name;
  post.querySelector(".photos__like").src = "./images/boton_like.svg";

  photoSection.append(post);
}

// addButton.addEventListener("click", function () {});

editButton.addEventListener("click", openClosePopup);
closeButton.addEventListener("click", openClosePopup);
formProfile.addEventListener("submit", handleProfileFormSubmit);
