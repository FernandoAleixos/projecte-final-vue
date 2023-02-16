import {
  reactive
} from "vue";

export const store = {
  debug: true,
  state: {
    products: reactive([{
        id: 1,
        name: "Calabazas",
        category: 1,
        units: 100,
        price: 11,
      },
      {
        id: 3,
        name: "Palomitas",
        category: 2,
        units: 100,
        price: 1,
      },
    ]),
    categories: reactive([{
        id: 0,
        name: "Frutas",
      },
      {
        id: 1,
        name: "Verduras",
      },
      {
        id: 2,
        name: "Frutos Secos",
      },
      {
        id: 3,
        name: "Dulces",
      },
    ]),
  },
  //Metode que busca el index per a ahorrar codi al programa
  buscarIndex(id) {
    let index = this.state.products.find((item) => item.id === id);
    return index;
  },
  addProduct(nameP, categoryP, unitsP, priceP) {
    let maxId = this.state.products.reduce((max, item) => (item.id > max ? item.id : max), 0);

    this.state.products.push({
      id: maxId + 1,
      name: nameP,
      category: categoryP,
      units: unitsP,
      price: priceP
    })
  },
  subirUds(id) {
    let index = this.buscarIndex(id)
    if (index !== -1) {
      index.units++;
    }
  },
  bajarUds(id) {
    let index = this.buscarIndex(id);
    if (index !== -1) {
      index.units--;
    }
  },
  editarProd(id) {
    console.log('Futuras implementaciones');
  },
  eliminarProd(id) {
    let index = this.buscarIndex(id);
    if (index !== -1) {
      this.state.products.splice(index, 1);
    }
  }
};