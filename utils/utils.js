import Card from "../components/Card.js";

// Función para creación de instancias de clase Card
function createCard(name, link) {
  const newCard = new Card(
    {
      text: name,
      image: link,
      handleCardClick: () => {
        newImagePopup.open({
          place: name,
          image: link,
        });
      },
    },
    "#cards"
  );
  return newCard;
}

export { createCard };
