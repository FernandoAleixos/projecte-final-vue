<template>
  <div class="row">
    <div class="col-sm-12 col-md-8 col-lg-8">
      <form @submit.prevent="submitForm">
        <fieldset>
          <legend class="bg-dark text-white text-center">
            Añadir producto
          </legend>
          <!-- Aquí los inputs y botones del form -->
          <div class="form-group">
            <label for="newprod-id">ID:</label>
            <input type="text" v-model="product.id" class="form-control" disabled />
          </div>
          <div class="form-group">
            <label for="newprod-name">Nombre:</label>
            <input type="text" v-model="product.name" class="form-control" required />
            <span class="error"></span>
          </div>
          <div class="form-group">
            <label for="newprod-cat">Categoría:</label>
            <select v-model="product.category" class="form-control" required>
              <option value="">--- Selecciona categoría ---</option>
              <option v-for="cat in categories" :key="cat.id" :value="cat.id" :title="cat.description">
                {{ cat.name }}
              </option>
            </select>
            <span class="error"></span>
          </div>

          <div class="form-group">
            <label for="newprod-units">Unidades.:</label>
            <input type="number" v-model="product.units" class="form-control" min="0" step="1" />
            <span class="error"></span>
          </div>
          <div class="form-group">
            <label for="newprod-price">Precio/u.:</label>
            <input type="number" v-model="product.price" class="form-control" required min="0" step="0.01" />
            <span class="error"></span>
          </div>
          <br />
          <button type="submit" class="btn btn-default btn-dark">Añadir</button>
          <button type="reset" class="btn btn-danger">Reset</button>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
import { store } from '../store/data';

export default {
  name: 'product-form',
  components: { ProuctForm },
  data() {
    return {
      product: store.state.products,
      categories: store.state.categories
    }
  },
  methods: {
    //Guarda los datos del formulario en el array del Store Pattern
    submitForm() {

    }
  }
}
</script>