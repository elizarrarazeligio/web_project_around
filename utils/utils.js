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
