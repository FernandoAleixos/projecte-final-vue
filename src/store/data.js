import { reactive } from "vue";

export const store = {
  debug: true,
  state: {
    products: [
      {
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
    ],
    categories: [
      {
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
    ],
  },
  calcularImporte(id) {

  },

  subirUds(id) {

  },

  bajarUds(id) {

  },

  editarProd(id) {

  },

  eliminarProd(id) {

  }
};