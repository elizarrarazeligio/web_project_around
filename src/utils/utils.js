import Card from "../components/Card.js";

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

export { createCard };
