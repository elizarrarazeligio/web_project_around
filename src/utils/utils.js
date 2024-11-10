import Card from "../components/Card.js";
import trashIcon from "../images/trash.png";

// Función para creación de instancias de clase Card
function createCard(name, link, popupInstance) {
  const newCard = new Card(
    {
      text: name,
      image: link,
      handleCardClick: () => {
        popupInstance.open({
          place: name,
          image: link,
        });
      },
    },
    "#cards"
  );
  return newCard;
}

// Función para agregar opción de borrar a instacias Card propias
function assignDeleteIcon(cardItem, cardElement) {
  if (cardItem.owner._id === "bbec80a71f167775eb90ff6c") {
    cardElement.querySelector(".photos__trash").src = trashIcon;
    cardElement.id = cardItem._id;
  }
}

// Función para procesar las solicitudes del servidor
function handleServerRequest({ request, handler }) {
  return request
    .then((res) => {
      return handler(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

export { createCard, assignDeleteIcon, handleServerRequest };
