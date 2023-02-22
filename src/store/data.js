import { reactive } from "vue";
import axios from 'axios';

const baseURL = 'http://localhost:3000';

export const store = {
  debug: true,
  state: reactive({
    products: [],
    categories: []
  }),

  async loadData() {
    await axios.get(baseURL + '/products')
      .then(response => this.state.products.splice(0, this.state.products.length, ...response.data))
      .catch(response => alert('Error: no se han podido cargar los datos. ' + response.message))

    await axios.get(baseURL + '/categories')
      .then(response => this.state.categories.splice(0, this.state.categories.length, ...response.data))
      .catch(response => alert('Error: no se han podido cargar los datos. ' + response.message))
  },

  // Función que busca el índice en el array local para ahorrar repetir del código
  buscarIndex(id) {
    let index = this.state.products.find((index) => index.id === id);
    return index;
  },

  // Función que añade los productos
  addProd(newName, newCat, newUnits, newPrice) {
    let maxId = this.state.products.reduce((max, index) => (index.id > max ? index.id : max), 0) + 1;

    axios.post(baseURL + '/products', {
      id: maxId,
      name: newName,
      category: newCat,
      units: newUnits,
      price: newPrice,
    })
      .then(response => this.state.products.push(response.data))
      .catch(response => alert('Error: no se ha añadido el registro. ' + response.message))
  },

  // Función que borra el producto asignado
  eliminarProd(id) {
    let index = this.buscarIndex(id);

    axios.delete(baseURL + '/products/' + id)
      .then(response => this.state.products.splice(index, 1))
      .catch(response => alert('Error: no se ha borrado el registro. ' + response.message))
  },

  // Función que sube las unidades del producto
  subirUds(id) {
    let index = this.buscarIndex(id);

    axios.put(baseURL + '/products/' + id, {
      id: index.id,
      name: index.name,
      category: index.category,
      units: index.units + 1,
      price: index.price,
    })
      .then(response => index.units += 1)
      .catch(response => alert('Error: no se ha modificado el registro. ' + response.message))
  },

  // Función que baja las unidades del producto
  bajarUds(id) {
    let index = this.buscarIndex(id);

    axios.put(baseURL + '/products/' + id, {
      id: index.id,
      name: index.name,
      category: index.categories,
      units: index.units - 1,
      price: index.price
    })
      .then(response => index.units -= 1)
      .catch(response => alert('Error: no se ha modificado el registro. ' + response.message))
  },
}