let editButton = document.querySelector(".profile__edit");
let closeButton = document.querySelector(".popup__close");
let saveButton = document.querySelector(".form__button");
let popUp = document.querySelector(".popup");
let formProfile = document.querySelector(".form");
let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__hobby");
let nameInput = document.querySelector(".form__input_type_name");
let jobInput = document.querySelector(".form__input_type_job");
const photoSection = document.querySelector(".photos");
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "./images/place1.jpg",
  },
  {
    name: "Lago Louise",
    link: "./images/place2.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "./images/place3.jpg",
  },
  {
    name: "Latemar",
    link: "./images/place4.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "./images/place5.jpg",
  },
  {
    name: "Lago di Braies",
    link: "./images/place6.jpg",
  },
];

initialCards.forEach((card) => {
  const cards = document.querySelector("#cards").content;

  const post = cards.querySelector(".photos__card").cloneNode(true);
  const image = post.querySelector(".photos__image");
  image.src = card.link;
  image.alt = `Imagen de ${card.name}`;
  post.querySelector(".photos__place").textContent = card.name;
  post.querySelector(".photos__like").src = "./images/boton_like.svg";

  photoSection.append(post);
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

editButton.addEventListener("click", openClosePopup);
closeButton.addEventListener("click", openClosePopup);
formProfile.addEventListener("submit", handleProfileFormSubmit);
