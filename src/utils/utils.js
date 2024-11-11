import Card from "../components/Card.js";
import trashIcon from "../images/trash.png";
import { api } from "../components/Api.js";

// Función para creación de instancias de clase Card
function createCard(name, link, popupInstance, id) {
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
      handleLike: (evt) => {
        if (evt.target.classList.contains("photos__like_active")) {
          handleServerRequest({
            request: api.addLike(id),
            handler: (res) => {
              evt.target.nextElementSibling.textContent = res.likes.length;
            },
          });
        } else {
          handleServerRequest({
            request: api.removeLike(id),
            handler: (res) => {
              evt.target.nextElementSibling.textContent = res.likes.length;
            },
          });
        }
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
  }
}

// Función para insertar el número de Likes desde el servidor
function assignLikeIcon(cardItem, cardElement) {
  cardElement.querySelector(".photos__like-number").textContent =
    cardItem.likes.length;
  const isLiked = cardItem.likes.some(
    (like) => like._id === "bbec80a71f167775eb90ff6c"
  );
  if (isLiked)
    cardElement
      .querySelector(".photos__like")
      .classList.add("photos__like_active");
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

export { createCard, assignDeleteIcon, assignLikeIcon, handleServerRequest };
