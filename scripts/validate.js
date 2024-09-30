// Muestra el mensaje de error
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("form__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
};

// Esconde el mensaje de error
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("form__input_type_error");
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
};

// Comprueba la validez de los elementos del formulario
const checkValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

// Comprueba si al menos un campo del formulario es inválido
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

// Cambia el estado del botón con respecto a la validez de los inputs
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("form__button_inactive");
    buttonElement.setAttribute("disabled", true);
  } else {
    buttonElement.classList.remove("form__button_inactive");
    buttonElement.removeAttribute("disabled");
  }
};

// Añade controladores/detectores de evento a cada input
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".form__input"));
  const submitButton = formElement.querySelector(".form__button");

  toggleButtonState(inputList, submitButton);

  inputList.forEach((inputElement) => {
    checkValidity(formElement, inputElement);

    inputElement.addEventListener("input", () => {
      console.log(inputElement.validationMessage);
      checkValidity(formElement, inputElement);
      toggleButtonState(inputList, submitButton);
    });
  });
};

// Añade controladores de evento a cada formulario
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".form"));

  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    setEventListeners(formElement);
  });
};

enableValidation();
