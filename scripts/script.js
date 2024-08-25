let editButton = document.querySelector(".profile__edit");
let closeButton = document.querySelector(".popup__close");
let saveButton = document.querySelector(".form__button");
let popUp = document.querySelector(".popup");
let formProfile = document.querySelector(".form");
let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__hobby");
let nameInput = document.querySelector(".form__input_type_name");
let jobInput = document.querySelector(".form__input_type_job");

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
