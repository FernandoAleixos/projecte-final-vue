<template>
  <div class="container">
    <h1>Listado de productos</h1>

    <table class="table table-striped">
      <thead class="table-dark">
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Categoria</th>
          <th>Uds.</th>
          <th>Precio/u</th>
          <th>Importe</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
          <product-item v-for="product in products" :key="product.id" :prod="product"/>
        <tr>
          <td>Productos:</td>
          <td>{{ products.length }}</td>
          <td>Importe total:</td>
          <td>{{  }}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
  import { store } from '../store/data';
  import ProductItem from './ProductItem.vue';

  export default {
    name: "product-table",
    components: { ProductItem },
    data() {
      return {
        products: store.state.products,
        categories: store.state.categories
      }
    },
    methods: {
      
    }
    /* mounted() {
      store.loadData()
    } */
  }
</script>
<style>
</style>