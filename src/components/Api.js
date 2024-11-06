export default class Api {
  constructor() {}
}

fetch("https://around.nomoreparties.co/v1/web-es-cohort-17/cards", {
  headers: {
    authorization: "f05ef4e2-b711-4c0d-bffb-160d98715bd3",
  },
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err.status);
  });
