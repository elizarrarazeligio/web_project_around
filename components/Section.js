export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._initialArray = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  // Método para iterar en el array de elementos y pasarlos sobre función
  // del constructor, para después agregarlos al DOM.
  renderItems() {
    this._initialArray.forEach((item) => {
      this._renderer(item);
    });
  }

  // Método para agregar los elementos al DOM
  addItem(item) {
    this._container.append(item);
  }

  // Método adicional para limpiar el contenedor
  clear() {
    this._container.innerHTML = "";
  }
}
